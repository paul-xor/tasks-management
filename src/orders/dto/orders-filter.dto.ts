import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { OrderStatus } from '../order-status.enum';

export class OrdersFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search?: string;

  @IsOptional()
  @IsEnum(OrderStatus)
  ordersStatus?: OrderStatus;
}
