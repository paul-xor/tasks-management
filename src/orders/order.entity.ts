import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { OrderStatus } from './order-status.enum';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  productName: string;

  @Column()
  description: string;

  @Column()
  orderStatus: OrderStatus;
}
