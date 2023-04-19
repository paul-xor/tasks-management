import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { OrdersRepository } from './orders.repository';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersFilterDto } from './dto/orders-filter.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrdersRepository)
    private ordersRepository: OrdersRepository,
  ) { }

  getOrders(ordersFilterDto: OrdersFilterDto): Promise<Order[]> {
    return this.ordersRepository.getOrders(ordersFilterDto);
  }

  async getOrderById(id: string): Promise<Order> {
    const found = await this.ordersRepository.findOne({ where: { id } });
    if (!found) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    return found;
  }

  createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersRepository.createOrder(createOrderDto);
  }
}
