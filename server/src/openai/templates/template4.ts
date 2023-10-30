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
  template4_prompt,
} from '../../common/helper/gpt.prompts';
import { BodyDto } from '../dto/body.dto';

@Injectable()
export class Template4 {
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
            content: template4_prompt(
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
      //   subject: 'Holiday Announcement for Government Employees',
      //   greetings: 'Dear {{first_name}} {{last_name}},',
      //   body1:
      //     'We are pleased to announce that the government has declared a holiday on the occasion of the upcoming festival. All government employees are requested to take a day off on the day of the festival.',
      //   image1: 'holiday_announcement.jpg',
      //   body2:
      //     'We understand that this holiday will give you an opportunity to spend quality time with your family and friends. We hope that you will make the most of this holiday.',
      //   body3:
      //     'We also request you to take all the necessary precautions to ensure your safety and the safety of your family during the festival.',
      //   image2: 'safety_precautions.jpg',
      //   body4: 'We wish you a happy and safe holiday. Enjoy the festival!',
      //   image3: 'festival_celebration.jpg',
      //   body5: 'We look forward to your return to work after the holiday.',
      //   image4: 'return_to_work.jpg',
      //   body6: 'We hope that you have a great time during the holiday.',
      //   regards: 'Regards, {{name}}',
      // };

      /// filtered images with remvoing .jpg extension
      let images: string[] = await removeJpgExt(
        completion.image1,
        completion.image2,
        completion.image3,
        completion.image4,
      );

      /// removing uderscore/dash if necessary
      images = await removeUnderscoreORDash(images);

      /// split camel image
      images = await splitCamelCase(images);

      let image1 = await this.unSplash.getImages(images[0]);
      let image2 = await this.unSplash.getImages(images[1]);
      let image3 = await this.unSplash.getImages(images[2]);
      let image4 = await this.unSplash.getImages(images[3]);

      /// final response object
      const {
        subject,
        body1,
        body2,
        body3,
        body4,
        body5,
        body6,
        greetings,
        header,
        button,
        regards,
      } = completion;
      return {
        header,
        button,
        subject: prompt,
        body1,
        body2,
        body3,
        body4,
        body5,
        body6,
        image1,
        image2,
        image3,
        image4,
        greetings,
        regards,
      };
    } catch (e) {
      console.log('Error at template4 \n', e);
    }
  }
}
