import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './order.entity';
import { OrdersFilterDto } from './dto/orders-filter.dto';
import { OrderStatus } from './order-status.enum';

@Injectable()
export class OrdersRepository extends Repository<Order> {
  constructor(private dataSource: DataSource) {
    super(Order, dataSource.createEntityManager());
  }

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    const { productName, description } = createOrderDto;

    const order = this.create({
      productName,
      description,
      orderStatus: OrderStatus.OPEN,
    });

    await this.save(order);
    return order;
  }

  async getOrders(ordersFilterDto: OrdersFilterDto): Promise<Order[]> {
    const { search, ordersStatus } = ordersFilterDto;

    const query = this.createQueryBuilder('order');

    if (ordersStatus) {
      query.andWhere('task.ordersStatus = :ordersStatus', { ordersStatus });
    }

    if (search) {
      query.andWhere(
        'LOWER(order.productName) LIKE LOWER(:search) OR LOWER(order.description) LIKE LOWER(:search)',
        { search: `%${search}%` },
      );
    }

    const orders = await query.getMany();
    return orders;
  }
}
