import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Res,
  StreamableFile,
} from '@nestjs/common';
import { BodyDto } from './dto/body.dto';
import { OpenAIService } from './openai.service';
import { createReadStream, readFileSync } from 'fs';
import { join } from 'path';
import { Response } from 'express';

@Controller()
export class OpenAIController {
  constructor(private readonly openAiService: OpenAIService) {}
  @Post('template')
  async retriveTemplateData(@Body() body: BodyDto) {
    console.log(body);

    return await this.openAiService.retriveTemplateData(body);
  }

  @Post('saveimages')
  async storeImagesLocally(@Body() images) {
    return this.openAiService.storeImagesLocally(images);
  }

  @Post('savetemplate')
  async saveTemplate(@Body() body) {
    // console.log(body);
    return this.openAiService.saveTemplate(body.htmlData, body.data);
  }

  @Get('download/:template')
  async downloadFile(
    @Res({ passthrough: true }) res: Response,
    @Param('template') template: string,
  ): Promise<StreamableFile> {
    /// get the template and then send it through the response
    const file = createReadStream(
      join(process.cwd(), 'public', 'templates', template),
    );
    /// set the header for the file accordingly
    res.set({
      'Content-Type': 'text/html',
      'Content-Disposition': `attachment; filename="${template}"`,
    });
    return new StreamableFile(file);
  }
}
