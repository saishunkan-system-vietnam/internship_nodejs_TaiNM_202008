// import { Controller, Dependencies, Get, Post, Put, Delete, Bind, Param, Req, Res } from '@nestjs/common';
import { Controller, Dependencies, Bind } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TicketService } from './ticket.service';

@Controller()
@Dependencies(TicketService)
export class TicketController {

    constructor(ticketService) {
        this.ticketService = ticketService;
      }

    @MessagePattern('selectticket')
    async selectticket(data) {
        console.log(data);
        let ticket = data;
        try {
            let airline = ticket.airline;
            let seat = ticket.seat;
            let start = ticket.start;
            let end = ticket.end;
            let date = ticket.date;
            let price = ticket.price;
            // if (airline === undefined) {
            //     airline = String(airline);
            //     airline = '';
            //   }
            // if (seat === undefined) {
            //     seat = String(seat);
            //     seat = '';
            //   }
             
            //   if (start === undefined) {
            //     start = String(start);
            //     start = '';
            //   }
            //   if (end === undefined) {
            //     end = String(end);
            //     end = '';
            //   }
            //   if (date === undefined) {
            //     date = String(date);
            //     date = '';
            //   }
            //   if (price === undefined) {
            //     price = String(price);
            //     price = '';
            //   }
            let selectticket = await this.ticketService.selectticket(airline, seat, start, end, date, price);
            return {
                "mess": "success",
                "data": selectticket
                };
        } catch (error) {
            console.log(error);
        }
    }

    @Bind(Payload())
    @MessagePattern('findById')
    async findticket(data) {
        console.log(data);
        try {
            let findticket = await this.ticketService.findticket(data);
            return {
                "mess": "success",
                "data": findticket
                };
        } catch (error) {
            console.log(error);
        }
        
    }

    @Bind(Payload())
    @MessagePattern('insertticket')
    async insertticket(data) {
        let ticket = data;
        try {
            let airline_id = ticket.airline_id;
            let start = ticket.start;
            let end = ticket.end;
            let date = ticket.date;
            let number_seat = ticket.number_seat;
            let price = ticket.price;
            let seat_id = ticket.seat_id;
            let result = await this.ticketService.insertticket(airline_id, seat_id, start, end, date, number_seat, price);
                // console.log(name);
            return {
                "mess": "success",
                "data": ticket
            }
        } catch (error) {
            return {
                "mess": "error"
            }
        }
    }

    @Bind(Payload())
    @MessagePattern('updateticket')
        async updateticket(data) {
            var ticket = data.ticket;
            try {
                let airline_id = ticket.airline_id;
                let start = ticket.start;
                let end = ticket.end;
                let date = ticket.date;
                let number_seat = ticket.number_seat;
                let price = ticket.price;
                let seat_id = ticket.seat_id;
                //console.log(name);
                let result = await this.ticketService.updateticket(data.id,airline_id, seat_id, start, end, date, number_seat, price); 
                return {
                    "mess": "success",
                    "data": ticket
                }
            } catch (error) {
                return {
                    "mess": "error"
                }
            }
        }   
    
    @Bind(Payload())
    @MessagePattern('deleteticket')
    async delete(data) {
        try {
            await this.ticketService.deleteOderTicket(data);
            let result = await this.ticketService.deleteticket(data);
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

    //airport
    @MessagePattern('selectairport')
    async selectairport() {
        try {
        let selectairport = await this.ticketService.selectairport();
        return {
            "mess": "success",
            "data": selectairport
            }
        } catch (error) {
            console.log(error);
        }
     }

    @Bind(Payload())
    @MessagePattern('insertairport')
    async insertairport(data) {
        try {
            let name = data.name;
            let insertairport = await this.ticketService.insertairport(name);
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
    @MessagePattern('updateairport')
        async updateairport(data) {
            var airport = data.airport;
            try {
                console.log(data);
                let name = airport.name;
                console.log(name);
                let updateairport = await this.ticketService.updateairport(data.id, name); 
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
    @MessagePattern('deleteairport')
    async deleteairport(data) {
        console.log(data);
        try {
            let deleteairport = await this.ticketService.deleteairport(data);
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
    
}
