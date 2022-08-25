import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './create-order.dto';
import { Order } from './order.entity';

@Injectable()
export class OrdersService {
  constructor(@InjectRepository(Order) private repo: Repository<Order>) {}

  getAllOrders() {
    return this.repo.find();
  }

  getOrderById(orderId: number) {
    const foundOrder = this.repo.findOne({
      where: {
        id: orderId,
      },
    });
    if (!foundOrder) {
      throw new NotFoundException('Movie not found!');
    }
    return foundOrder;
  }

  createNewOrder(orderDto: CreateOrderDto) {
    const newOrder = this.repo.create(orderDto);
    return this.repo.save(newOrder);
  }

  async updateOrder(orderId: number, attrs: Partial<Order>) {
    const order = await this.getOrderById(orderId);
    Object.assign(order, attrs);
    return this.repo.save(order);
  }
}
