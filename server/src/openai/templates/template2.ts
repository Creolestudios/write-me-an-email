import { Catch, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Configuration, OpenAIApi } from 'openai';
import {
  removeJpgExt,
  removeUnderscoreORDash,
  splitCamelCase,
} from 'src/common/helper/image.filter';
import { UnSplashService } from 'src/unsplash/unsplash.service';
import { createApi } from 'unsplash-js';
import {
  assistant_role,
  template2_prompt,
} from '../../common/helper/gpt.prompts';
import { BodyDto } from '../dto/body.dto';

@Injectable()
export class Template2 {
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
            content: template2_prompt(
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
      //   subject: 'Steps to Secure Your Dream Home with a Mortgage',
      //   greetings: 'Dear {{ contact_firstname }},',
      //   body1:
      //     "We understand that buying a home is a significant investment, and securing a mortgage can be a daunting task. That's why we're here to help you every step of the way. Our team at {{ user_company_name }} has put together a comprehensive guide to help you secure your dream home with a mortgage.",
      //   image1: 'mortgage_guide.jpg',
      //   body2:
      //     'Our guide covers everything from understanding the different types of mortgages available to you, to tips on improving your credit score, and even a step-by-step guide on the mortgage application process. We want to make sure you have all the information you need to make informed decisions and secure the best possible mortgage for your dream home.',
      //   image2: 'mortgage_application.jpg',
      //   body3:
      //     "If you have any questions or would like to speak with one of our mortgage specialists, please don't hesitate to reach out to us at {{ user_phonenumber }} or {{ user_email }}. We're here to help you every step of the way.",
      //   image3: 'mortgage_specialist.jpg',
      //   body4:
      //     'Thank you for considering {{ user_company_name }} as your mortgage partner. We look forward to helping you secure your dream home.',
      //   regards:
      //     'Best regards,\n{{ user_owner_firstname }}\n{{ user_company_name }}',
      // };

      /// filtered images with remvoing .jpg extension
      let images: string[] = await removeJpgExt(
        completion.image1,
        completion.image2,
        completion.image3,
      );

      /// removing uderscore/dash if necessary
      images = await removeUnderscoreORDash(images);

      /// split camel image
      images = await splitCamelCase(images);

      let image1 = await this.unSplash.getImages(images[0]);
      let image2 = await this.unSplash.getImages(images[1]);
      let image3 = await this.unSplash.getImages(images[2]);

      /// final response object
      const {
        subject,
        greetings,
        body1,
        body2,
        body3,
        body4,
        regards,
        header,
        button,
      } = completion;
      return {
        header,
        button,
        subject : prompt,
        greetings,
        body1,
        body2,
        body3,
        body4,
        regards,
        image1,
        image2,
        image3,
      };
    } catch (e) {
      console.log('Error at template2 \n', e);
    }
  }
}
