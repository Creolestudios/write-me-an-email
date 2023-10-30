import { Injectable } from '@nestjs/common';
import { Template1 } from './templates/template1';
import { Template2 } from './templates/template2';
import { Template3 } from './templates/template3';
import { Template4 } from './templates/template4';
import { Template5 } from './templates/template5';
import * as https from 'https';
import * as fs from 'fs';
import path, { join } from 'path';
import * as cheerio from 'cheerio';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Template } from './entities/template.entity';
import { MongoRepository } from 'typeorm';
import { BodyDto } from './dto/body.dto';
@Injectable()
export class OpenAIService {
  @InjectRepository(Template)
  private readonly templateRepository: MongoRepository<Template>;
  constructor(
    private readonly template1: Template1,
    private readonly template2: Template2,
    private readonly template3: Template3,
    private readonly template4: Template4,
    private readonly template5: Template5,
    private readonly config: ConfigService,
  ) {}

  /// retriving templates based on id
  async retriveTemplateData(data: BodyDto) {
    const { id } = data;
    if (id == 0) {
      return await this.template1.task(data);
    } else if (id == 1) {
      return await this.template2.task(data);
    } else if (id == 2) {
      return await this.template3.task(data);
    } else if (id == 3) {
      return await this.template4.task(data);
    } else if (id == 4) {
      return await this.template5.task(data);
    } else {
      return await this.template2.task(data);
    }
  }

  /// storing the images
  async storeImagesLocally(images: string[]) {
    let localImageurls: string[] = [];
    let local = images?.map(async (imageUrl, index) => {
      const imgName = `${new Date().getTime().toString()}_${index}.jpg`;
      return new Promise((resolve, reject) => {
        /// setting image path as current timestampt
        const imagePath = join(__dirname, '../..', 'public', 'images', imgName);

        /// creating the writestream
        const file = fs.createWriteStream(imagePath);
        /// fetch image and write
        https
          .get(imageUrl, (response) => {
            response.pipe(file);
            file.on('finish', () => {
              file.close();
              localImageurls.push(imgName);
              resolve(`Image downloaded as ${imagePath}`);
            });
          })
          .on('error', (err) => {
            fs.unlink(imagePath, (txt) => {
              console.log('TXT:', txt);
            });
            reject(`Error downloading image: ${err.message}`);
          });
      });
    });
    // console.log(localImageurls);
    return Promise.all(local).then((msg) => {
      return localImageurls.sort();
    });
  }

  /// storing the template
  async saveTemplate(htmlData: string, context: any) {
    // console.log(context, htmlData);

    /// extracting the images from the template
    const $ = cheerio.load(htmlData);

    // Get all the image tags in the HTML content
    const imageTags = $('img');

    // Extract the `src` attribute from each image tag
    let imageSources: string[] = imageTags
      .toArray()
      .map((img) => $(img).attr('src'));

    imageSources.shift();
    // console.log(imageSources);

    /// saving the images from the template in local storage
    const updatedImage = await this.storeImagesLocally(imageSources);

    /// altering the url of the images with this project's server
    const replacedImages = imageTags
      .toArray()
      .map((img, index) => updatedImage[index] || $(img).attr('src'));

    /// modifiying the html content
    imageTags.each((index, img) => {
      if (index != 0) {
        const originalUrl = $(img).attr('src');
        const updatedUrl = replacedImages[index - 1] || originalUrl;
        $(img).attr(
          'src',
          this.config.get<string>('SERVER_URL') +
            '/public/images/' +
            updatedUrl,
        );
        replacedImages[index - 1] = `${this.config.get<string>(
          'SERVER_URL',
        )}${this.config.get<string>('IMAGE_PATH')}${replacedImages[index - 1]}`;
      }
    });

    // Get the updated HTML content
    const updatedHtmlContent = $.html();

    const templateName = `${new Date().getTime().toString()}_template.html`;

    const templatePath = join(
      __dirname,
      '../..',
      'public',
      'templates',
      templateName,
    );

    /// creating the object to be stored
    const data = {
      images: replacedImages,
      template:
        this.config.get<string>('SERVER_URL') +
        this.config.get<string>('TEMPLATE_PATH') +
        templateName,
      metadata: {
        prompt: context.prompt,
        sendingPersonas: context.sendingPersonas,
        receivingPersonas: context.receivingPersonas,
        purpose: context.purpose,
        modifier: context.modifier,
      },
    };
    this.templateRepository.save(data);

    fs.writeFileSync(templatePath, updatedHtmlContent);
    return templateName;
  }
}
