import { Module } from '@nestjs/common';
import { OrdersService } from './orders/orders.service';
import { UsersService } from './users/users.service';
import { StatisticService } from './statistic/statistic.service';
import { ClientsModule, Transport } from "@nestjs/microservices";
import { OrdersController } from './orders/orders.controller';
import { UsersController } from './users/users.controller';
import { StatisticController } from './statistic/statistic.controller';
import { TicketController } from './ticket/ticket.controller';
import { TicketService } from './ticket/ticket.service';
import { from } from '../node_modules/rxjs/index';


@Module({
  imports: [
    ClientsModule.register([
      {
        name: "Statistic",
        transport: Transport.TCP,
        options: {
          host: "127.0.0.1",
          port: 8877
        }
      },
      {
        name: "Users",
        transport: Transport.TCP,
        options: {
          host: "127.0.0.1",
          port: 8888
        }
      },
      {
        name: "Orders",
        transport: Transport.TCP,
        options: {
          host: "127.0.0.1",
          port: 8899
        }
      },
      {
        name: "Ticket",
        transport: Transport.TCP,
        options: {
          host: "127.0.0.1",
          port: 8866
        }
      }
    ])
  ],
  controllers: [OrdersController, UsersController, StatisticController, TicketController],
  providers: [OrdersService, UsersService, StatisticService, TicketService],
})
export class AppModule {}
