import { IsString, IsIn, IsInt } from 'class-validator';

export class ItemCreateRequestDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsInt()
  quantity: number;

  @IsInt()
  price: number;
}
