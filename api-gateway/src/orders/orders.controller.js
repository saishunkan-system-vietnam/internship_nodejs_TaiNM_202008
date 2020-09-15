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
        let data = {
            'user_id': req.session.user.id,
            'data': req.body
        };
        return this.ordersService.insertOrder(data);
    }

    @Delete(':id')
    @Bind(Param())
    async removeOrder(params) {
        return this.ordersService.removeOrder(params.id);
    }

    @Get()
    @Bind(Req())
    async findAll(req){
        if (!req.session || !req.session.user || req.session.user.level == 2) {
            return {
                "mess": "levelFail"
            }
        }else{
            return this.ordersService.findAll();
        }
    }

    @Get('findById')
    @Bind(Req())
    async findAll(req){
        // console.log(req.session.user.id);
        return this.ordersService.findById(req.session.user.id);
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
