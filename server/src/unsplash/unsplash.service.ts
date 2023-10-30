import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createApi } from 'unsplash-js';

@Injectable()
export class UnSplashService {
  constructor(private readonly config: ConfigService) {}
  async getImages(image: string) {
    /// all types of images
    let rawImages: string[] = [];
    let smallImages: string[] = [];
    let fullImages: string[] = [];
    let regularImages: string[] = [];
    let thumbImages: string[] = [];

    try {
      /// get photos list from unsplash api
      /// api configuration
      const unsplash = createApi({
        accessKey: this.config.get<string>('UNSPLASH_ACCESS_KEY'),
      });
      /// send api request
      const data = await unsplash.search.getPhotos({
        query: image,
        perPage: 30,
        orientation: 'landscape',
      });

      if (data.type === 'error') {
        throw data.errors;
      } else {
        data.response.results.forEach((item) => {
          smallImages.push(item.urls.small);
          rawImages.push(item.urls.raw);
          fullImages.push(item.urls.full);
          regularImages.push(item.urls.regular);
          thumbImages.push(item.urls.thumb);
        });

        return {
          raw: rawImages,
          small: smallImages,
          regular: regularImages,
          full: fullImages,
          thumb: thumbImages,
        };
      }
    } catch (e) {
      console.log(e);
    }
  }
}
