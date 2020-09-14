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
    @MessagePattern('get')
    async finAll(data){
        try {
            let arr = await this.ordersService.findAll();
            var keys = ['id_order','user_id','total','status','reg_date',
            'price','quantity', 'start','end','name'];

            //vacate keys from main array
            var newArr = arr.slice(0, arr.length);

            var formatted = [],
            data = newArr,
            cols = keys,
            l = cols.length;
            for (var i=0; i<data.length; i++) {
                    var d = data[i],
                            o = {};
                    for (var j=0; j<l; j++)
                            o[cols[j]] = d[j];
                    formatted.push(o);
            }
            return {
                "mess": "success",
                "data": formatted
            };
        } catch (error) {
            return {
                "mess":"error"
            }
        }
    }

    @Bind(Payload())
    @MessagePattern('insertOrder')
    async insertOrder(data){
        console.log(data.data.price)
        try {
            let userId = data.user_id;
            let total = data.data.price;
            let result = await this.ordersService.insert(userId);
            // let order_id = result.fetchOne();
            // console.log(order_id[0]);
            // for (let index = 0; index < data.ticket_id.length; index++) {
            // await this.ordersService.insertOrder(order_id[0],data.data.id_ticket, 1);
            // }
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

    @Bind(Payload())
    @MessagePattern('updateStatus')
    async updateStatus(data) {
        // console.log(data);
       try {
            await this.ordersService.updateStatus(data.id, data.status);
            return {
                "mess":"success",
            }
       } catch (error) {
            return {
                "mess":"error"
            }
       }
    }

}

