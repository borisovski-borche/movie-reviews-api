import { IsNumber, IsOptional, IsString } from 'class-validator';
import { OrderStatus } from './order-status.enum';


export class UpdateOrderDto {
  @IsString()
  @IsOptional()
  items: string;

  @IsNumber()
  @IsOptional()
  amount: number;

  @IsString()
  @IsOptional()
  status: OrderStatus;

  @IsString()
  @IsOptional()
  date: string;

  @IsString()
  @IsOptional()
  deliverer: string;
}
