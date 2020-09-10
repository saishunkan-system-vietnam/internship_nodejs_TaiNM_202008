import { Controller, Dependencies, Get, Post, Req, Bind, Param, Delete, Put } from '@nestjs/common';
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

    @Get()
    @Bind(Req())
    async findAll(req){
        if (!req.session || !req.session.user) {
            return {
                "mess": "error"
            }
        }else{
            return this.ordersService.findAll();
        }
    }

    @Put(':id')
    @Bind(Req())
    async updateStatus(req){
        if (!req.session || !req.session.user) {
            return {
                "mess": "error"
            }
        }else{
            return this.ordersService.updateStatus(req.body);
        }
    }

}
