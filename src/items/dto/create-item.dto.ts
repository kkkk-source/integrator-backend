import { Min, Max, IsString, IsIn, IsInt } from 'class-validator';

export class CreateItemDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsInt()
  price: number;
}
