import { Module } from '@nestjs/common';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import { AirportService } from '../airport/airport.service';
import { AirportController } from '../airport/airport.controller';

@Module({
    controllers: [TicketController,AirportController],
    providers: [TicketService,AirportService],
})
export class TicketModule {}
