import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { OrderRepository } from './order.repository';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderRepository)
    private orderRepository: OrderRepository,
  ) { }

  async getOrderById(id: string): Promise<Order> {
    const found = await this.orderRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Order with ID: "${id}"`);
    }

    return found;
  }

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.orderRepository.createOrder(createOrderDto);
  }
}
