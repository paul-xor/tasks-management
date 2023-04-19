import { Repository, DataSource } from 'typeorm';
import { Order } from './order.entity';
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderRepository extends Repository<Order> {
  constructor(private dataSource: DataSource) {
    super(Order, dataSource.createEntityManager());
  }

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    const { productName, description, orderStatus } = createOrderDto;

    const order = this.create({
      productName,
      description,
      orderStatus,
    });

    await this.save(order);
    return order;
  }
}
