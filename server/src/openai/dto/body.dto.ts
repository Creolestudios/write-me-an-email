import { IsNumber, IsString } from 'class-validator';

export class BodyDto {
  @IsString()
  prompt: string;

  @IsNumber()
  id: number;

  @IsString()
  sendingPersonas: string;

  @IsString()
  receivingPersonas: string;

  @IsString()
  purpose: string;

  @IsString()
  modifier: string;
}
