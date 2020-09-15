import {
    Controller,
    Dependencies,
    Bind
} from '@nestjs/common';
import {
    OrdersService
} from './orders.service';
import {
    MessagePattern,
    Payload
} from '@nestjs/microservices';

@Controller('orders')
@Dependencies(OrdersService)
export class OrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }

    @Bind(Payload())
    @MessagePattern('get')
    async finAll(data) {
        try {
            let arr = await this.ordersService.findAll();
            var keys = ['id', 'user_id', 'ticket_id', 'airline', 'seat',
                'start', 'end', 'price', 'date', 'quantity', 'status', 'reg_date', 'id_user', 'email'
            ];

            //vacate keys from main array
            var newArr = arr.slice(0, arr.length);

            var formatted = [],
                data = newArr,
                cols = keys,
                l = cols.length;
            for (var i = 0; i < data.length; i++) {
                var d = data[i],
                    o = {};
                for (var j = 0; j < l; j++)
                    o[cols[j]] = d[j];
                formatted.push(o);
            }
            return {
                "mess": "success",
                "data": formatted
            };
        } catch (error) {
            return {
                "mess": "error"
            }
        }
    }

    @Bind(Payload())
    @MessagePattern('insertOrder')
    async insertOrder(data) {
        // console.log(data.user_id)
        try {
            let ticket = data.data;
            await this.ordersService.insertOrders(data.user_id, ticket.id_ticket, ticket.hang, ticket.loaiGhe, ticket.start, ticket.end, ticket.price, ticket.quantity, ticket.date);
            await this.ordersService.updateQuantity(ticket.id_ticket);
            return {
                "mess": "success",
                "data": data
            }
        } catch (error) {
            return {
                "mess": "error"
            }
        }
    }

    @Bind(Payload())
    @MessagePattern('removeOrder')
    removeOrder(data) {
        try {
            this.ordersService.delete(data);
            return {
                "mess": "success",
                "data": data
            }
        } catch (error) {
            return {
                "mess": "error"
            }
        }
    }

    @Bind(Payload())
    @MessagePattern('updateStatus')
    async updateStatus(data) {
        console.log(data);
        try {
            await this.ordersService.updateStatus(data.id, data.status);
            return {
                "mess": "success",
            }
        } catch (error) {
            return {
                "mess": "error"
            }
        }
    }

    @Bind(Payload())
    @MessagePattern('findOrderByUsers')
    async findOrderByUsers(data) {
        console.log(data);
        try {
            let arr = await this.ordersService.findById(data);
            var keys = ['id', 'user_id', 'ticket_id', 'airline', 'seat','start', 'end', 'price', 'date', 'quantity', 'status', 'reg_date'
            ];

            //vacate keys from main array
            var newArr = arr.slice(0, arr.length);

            var formatted = [],
                data = newArr,
                cols = keys,
                l = cols.length;
            for (var i = 0; i < data.length; i++) {
                var d = data[i],
                    o = {};
                for (var j = 0; j < l; j++)
                    o[cols[j]] = d[j];
                formatted.push(o);
            }
            return {
                "mess": "success",
                "data": formatted
            };
        } catch (error) {
            return {
                "mess": "error"
            }
        }
    }

}