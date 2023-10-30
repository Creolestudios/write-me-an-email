import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Configuration, OpenAIApi } from 'openai';
import {
  removeJpgExt,
  removeUnderscoreORDash,
  splitCamelCase,
} from 'src/common/helper/image.filter';
import { UnSplashService } from 'src/unsplash/unsplash.service';
import {
  assistant_role,
  template1_prompt,
} from '../../common/helper/gpt.prompts';
import { BodyDto } from '../dto/body.dto';

@Injectable()
export class Template1 {
  constructor(
    private readonly config: ConfigService,
    private readonly unSplash: UnSplashService,
  ) {}
  async task(data: BodyDto) {
    /// extract the id and prompt from body
    const {
      id,
      prompt,
      sendingPersonas,
      receivingPersonas,
      purpose,
      modifier,
    } = data;

    /// set the openai configuration
    const configuration = new Configuration({
      apiKey: this.config.get<string>('OPEN_AI_KEY'),
    });

    /// creating the openai object
    const openai = new OpenAIApi(configuration);

    try {
      const result = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'assistant', content: assistant_role },
          {
            role: 'user',
            content: template1_prompt(
              prompt,
              sendingPersonas,
              receivingPersonas,
              purpose,
              modifier,
            ),
          },
        ],
        max_tokens: 1000,
        temperature: 0,
      });

      let completion = JSON.parse(result.data.choices[0].message.content);
      console.log(completion);

      // let completion = {
      //   header: '{{ team_logo }}',
      //   subject: 'Following up on our previous communication',
      //   greetings: 'Dear {{ contact_firstname }},',
      //   body1:
      //     'I hope this email finds you well. I wanted to follow up on our previous communication regarding the job proposal. I wanted to check if you had any further questions or concerns that I could address. We are excited about the possibility of having you join our team at {{ user_company_name }}.',
      //   image1: 'job_proposal.jpg',
      //   body2:
      //     'Please let me know if you need any additional information or if you would like to schedule a call to discuss the proposal further. We value your interest in our company and look forward to hearing back from you soon.',
      //   image2: 'team_photo.jpg',
      //   body3:
      //     'Thank you for considering {{ user_company_name }} as your potential employer. We believe that you would be a great addition to our team and we are excited about the possibility of working together.',
      //   image3: 'office_building.jpg',
      //   regards: 'Best regards,',
      //   button: '{{ user_website_display_name }}',
      // };

      /// filtered images with remvoing .jpg extension
      let images: string[] = await removeJpgExt(
        completion.image1,
        completion.image2,
        completion.image3,
      );

      // console.log(images);

      /// removing uderscore/dash if necessary
      images = await removeUnderscoreORDash(images);

      /// split camel image
      images = await splitCamelCase(images);

      let image1 = await this.unSplash.getImages(images[0]);
      let image2 = await this.unSplash.getImages(images[1]);
      let image3 = await this.unSplash.getImages(images[2]);

      /// final response object
      const {
        header,
        button,
        subject,
        greetings,
        body1,
        body2,
        body3,
        regards,
      } = completion;
      return {
        header,
        subject : prompt,
        greetings,
        body1,
        body2,
        body3,
        regards,
        image1,
        image2,
        image3,
        button,
      };
    } catch (e) {
      console.log('Error at template1 \n', e);
    }
  }
}
