import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateOrderDto } from './create-order.dto';
import { OrdersService } from './orders.service';
import { UpdateOrderDto } from './update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('/')
  getAllOrders() {
    return this.ordersService.getAllOrders();
  }

  @Get('/:id')
  getOrderById(@Param('id') id: string) {
    return this.ordersService.getOrderById(parseInt(id));
  }

  @Post('/')
  async createNewOrder(@Body() body: CreateOrderDto) {
    return await this.ordersService.createNewOrder(body);
  }

  @Patch('/:id')
  updateOrder(@Param('id') id: string, @Body() body: UpdateOrderDto) {
    return this.ordersService.updateOrder(parseInt(id), body);
  }
}
