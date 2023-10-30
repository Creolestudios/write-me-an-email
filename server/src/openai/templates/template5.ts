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
  template5_prompt,
} from '../../common/helper/gpt.prompts';
import { BodyDto } from '../dto/body.dto';

@Injectable()
export class Template5 {
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
            content: template5_prompt(
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
      //   subject: 'Loan Application Approved',
      //   greetings: 'Dear {{ contact_firstname }},',
      //   image1: 'loan_approval.png',
      //   body1:
      //     'We are pleased to inform you that your loan application has been approved. You can expect the funds to be transferred to your account within the next 24 hours.',
      //   image2: 'loan_terms.png',
      //   body2:
      //     'Please review the loan terms and conditions attached to this email. If you have any questions or concerns, please do not hesitate to contact us.',
      //   image3: 'contact_info.png',
      //   body3:
      //     'If you need to contact us, please use the following information:\n' +
      //     'Phone Number: {{ contact_phonenumber }}\n' +
      //     'Email: {{ contact_email }}\n' +
      //     'Mailing Address: {{ contact_mailingaddressline1 }}\n' +
      //     '\n' +
      //     'Thank you for choosing {{ user_company_name }} for your lending needs.',
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
        image2,
        image3,
        regards,
        greetings,
        header,
        button,
      };
    } catch (e) {
      console.log('Error at template5 \n', e.response);
    }
  }
}
