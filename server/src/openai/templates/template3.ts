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
  template3_prompt,
} from '../../common/helper/gpt.prompts';
import { BodyDto } from '../dto/body.dto';

@Injectable()
export class Template3 {
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
            content: template3_prompt(
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
      //   subject: 'Expert Mortgage Advice for Creole Studios Employees',
      //   greetings: 'Dear {{ contact_firstname }},',
      //   body1:
      //     'We hope this email finds you well. As a valued employee of Creole Studios, we wanted to offer you expert mortgage advice from our team at {{ user_company_name }}. Our team of experienced mortgage professionals can help you navigate the home buying process and find the best mortgage options for your unique situation.',
      //   body2:
      //     "Whether you're a first-time homebuyer or looking to refinance your current mortgage, our team is here to help. We offer a variety of mortgage options, including conventional, FHA, VA, and jumbo loans. Plus, as an employee of Creole Studios, you may be eligible for special discounts and incentives.",
      //   body3:
      //     'To learn more about our mortgage services and to schedule a consultation with one of our experts, please visit our website at {{ user_website_display_name }}. We look forward to helping you achieve your homeownership goals!',
      //   image1: '{{ team_logo }}',
      //   regards:
      //     'Best regards,\n{{ contact_owner_firstname }}\n{{ user_company_name }}',
      // };

      /// filtered images with remvoing .jpg extension
      let images: string[] = await removeJpgExt(completion.image1);

      /// removing uderscore/dash if necessary
      images = await removeUnderscoreORDash(images);

      /// split camel image
      images = await splitCamelCase(images);

      let image1 = await this.unSplash.getImages(images[0]);

      /// final response object
      const {
        subject,
        body1,
        body2,
        body3,
        greetings,
        regards,
        header,
        button,
      } = completion;
      return {
        subject: prompt,
        body1,
        body2,
        body3,
        image1,
        regards,
        greetings,
        header,
        button,
      };
    } catch (e) {
      console.log('Error at template3 \n', e);
    }
  }
}
