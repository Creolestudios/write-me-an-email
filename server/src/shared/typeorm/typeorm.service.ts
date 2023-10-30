import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService;

  public createTypeOrmOptions():
    | TypeOrmModuleOptions
    | Promise<TypeOrmModuleOptions> {
    const username: string = this.config.get<string>('DB_USERNAME');
    const password: string = this.config.get<string>('DB_PASSWORD');
    const database: string = this.config.get<string>('DB_DATABASE');
    return {
      type: 'mongodb',
      url: `mongodb+srv://${username}:${password}@cluster0.s1iylul.mongodb.net/?retryWrites=true&w=majority`,
      database,
      synchronize: true,
      autoLoadEntities: true,
    };
  }
}
