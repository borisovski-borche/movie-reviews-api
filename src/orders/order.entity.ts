import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { OrderStatus } from "./order-status.enum";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    items: string;

    @Column()
    amount: number;

    @Column()
    status: OrderStatus;

    @Column()
    date: string;

    @Column()
    deliverer: string;
}
  