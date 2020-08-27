import { Controller,Dependencies,Req, Res, Post, Bind, Delete, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
@Dependencies(OrdersService)
export class OrdersController {
    constructor(ordersService){
        this.ordersService = ordersService;
    }

    @Post()
    @Bind(Req(), Res())
    async insertOrder(req,res){
        // console.log(req.body.ticket_id.length)
        try {
            let userId = req.body.userId;
            let total = req.body.total;
            let result = await this.ordersService.insert(userId,total);
            let order_id = result.fetchOne();
            // console.log(order_id[0]);
            for (let index = 0; index < req.body.ticket_id.length; index++) {
                await this.ordersService.insertOrder(order_id[0],req.body.ticket_id[index], req.body.quantity[index],req.body.ticket_id.length);
            }
            return res.json({
                mess:"success",
                data: req.body
            });
        } catch (error) {
            return res.json({
                mess: error
            });
        
        }
    }

    @Delete(':id')
    @Bind(Param(), Res())
    removeUsers(params,res) {
       try {
            this.ordersService.delete(params.id);
            return res.json({
                mess:"success",
            });
       } catch (error) {
            return res.json({
                mess: error
            });
       }
    }

}

