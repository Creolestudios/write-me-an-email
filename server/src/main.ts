import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /// get the confifuration for getting the port
  const config: ConfigService = app.get(ConfigService);

  /// enable cross origin resource sharing
  app.enableCors();

  /// seting global route prefix
  app.setGlobalPrefix('/email-gpt');

  /// adding gloabal validation
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  /// get the port
  const port: number = config.get<number>('PORT') || 3000;

  await app.listen(port, () => {
    console.log('[WEB]', config.get<string>('BASE_URL') + port);
  });
}
bootstrap();
