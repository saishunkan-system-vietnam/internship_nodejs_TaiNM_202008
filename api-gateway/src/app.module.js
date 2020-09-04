import { Module } from '@nestjs/common';
import { StatisticModule } from './statistic/statistic.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [StatisticModule, UsersModule, OrdersModule, TicketModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
