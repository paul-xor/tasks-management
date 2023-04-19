import { Controller, Post, Body, Query, Get } from '@nestjs/common';

import { Order } from 'src/order/order.entity';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersFilterDto } from './dto/orders-filter.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) { }

  // @Get('/:id')
  // getTaskbyId(@Param('id') id: string): Promise<Order> {
  //   return this.tasksService.getTaskById(id);
  // }

  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersService.createOrder(createOrderDto);
  }

  @Get()
  getOrders(@Query() ordersFilterDto: OrdersFilterDto): Promise<Order[]> {
    return this.ordersService.getOrders(ordersFilterDto);
  }
}
