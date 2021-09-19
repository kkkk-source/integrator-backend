import { IsString, IsIn, IsInt } from 'class-validator';

export class ItemUpdateRequestDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsInt()
  quantity: number;

  @IsInt()
  price: number;
}
