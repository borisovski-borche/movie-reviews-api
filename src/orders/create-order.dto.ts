import { IsNumber, IsString } from "class-validator";
import { OrderStatus } from "./order-status.enum";


export class CreateOrderDto {
    @IsString()
    items: string;

    @IsNumber()
    amount: number;

    @IsString()
    status: OrderStatus;

    @IsString()
    date: string;

    @IsString()
    deliverer: string;
}