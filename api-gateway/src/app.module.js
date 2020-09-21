import {
  Module
} from '@nestjs/common';
import {
  OrdersService
} from './orders/orders.service';
import {
  UsersService
} from './users/users.service';
import {
  StatisticService
} from './statistic/statistic.service';
import {
  ClientsModule,
  Transport
} from "@nestjs/microservices";
import {
  OrdersController
} from './orders/orders.controller';
import {
  UsersController
} from './users/users.controller';
import {
  StatisticController
} from './statistic/statistic.controller';
import {
  TicketController
} from './ticket/ticket.controller';
import {
  TicketService
} from './ticket/ticket.service';
// import { from } from '../node_modules/rxjs/index';
import {
  CategoryService
} from './category/category.service';
import {
  CategoryController
} from './category/category.controller';


@Module({
  imports: [
    ClientsModule.register([{
        name: "Statistic",
        transport: Transport.MQTT,
        options: {
          url: 'mqtt://localhost:1883',
          topic: 'statistic'
        }
      },
      {
        name: "Users",
        transport: Transport.MQTT,
        options: {
          url: 'mqtt://localhost:1883',
          topic: 'users',
        }
      },
      {
        name: "Orders",
        transport: Transport.MQTT,
        options: {
          url: 'mqtt://localhost:1883',
          topic: 'orders'
        }
      },
      {
        name: "Ticket",
        transport: Transport.MQTT,
        options: {
          url: 'mqtt://localhost:1883',
          topic: 'tickets'
        }
      },
      {
        name: "Category",
        transport: Transport.MQTT,
        options: {
          url: 'mqtt://localhost:1883',
          topic: 'category'
        }
      }
    ])
  ],
  controllers: [OrdersController, UsersController, StatisticController, TicketController, CategoryController],
  providers: [OrdersService, UsersService, StatisticService, TicketService, CategoryService],
})
export class AppModule {}