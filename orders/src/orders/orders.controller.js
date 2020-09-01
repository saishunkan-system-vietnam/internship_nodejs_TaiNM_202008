import { Controller,Dependencies, Bind } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('orders')
@Dependencies(OrdersService)
export class OrdersController {
    constructor(ordersService){
        this.ordersService = ordersService;
    }

    @Bind(Payload())
    @MessagePattern('insertOrder')
    async insertOrder(data){
        // console.log(data)
        try {
            let userId = data.userId;
            let total = data.total;
            let result = await this.ordersService.insert(userId,total);
            let order_id = result.fetchOne();
            // console.log(order_id[0]);
            for (let index = 0; index < data.ticket_id.length; index++) {
                await this.ordersService.insertOrder(order_id[0],data.ticket_id[index], data.quantity[index],data.ticket_id.length);
            }
            await this.ordersService.closeDB();
            return {
                "mess":"success",
                "data": data
            }
        } catch (error) {
            await this.ordersService.closeDB();
            return {
                "mess":"error"
            }
        }
    }

    @Bind(Payload())
    @MessagePattern('removeOrder')
    removeOrder(data) {
       try {
            this.ordersService.delete(data);
            return {
                "mess":"success",
                "data": data
            }
       } catch (error) {
            return {
                "mess":"error"
            }
       }
    }

}

