import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  productName: string;

  @Column()
  description: string;

  @Column()
  orderStatus: string;
}
