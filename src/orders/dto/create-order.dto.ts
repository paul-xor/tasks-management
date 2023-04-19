import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  productName: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  orderStatus: string;
}
