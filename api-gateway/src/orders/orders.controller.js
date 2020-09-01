import { Controller, Dependencies, Post, Req, Bind, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
@Dependencies(OrdersService)
export class OrdersController {
    constructor(ordersService){
        this.ordersService = ordersService;
    }

    @Post()
    @Bind(Req())
    async insertOrder(req){
        return this.ordersService.insertOrder(req.body);
    }

    @Delete(':id')
    @Bind(Param())
    async removeOrder(params) {
        return this.ordersService.removeOrder(params.id);
    }

}
