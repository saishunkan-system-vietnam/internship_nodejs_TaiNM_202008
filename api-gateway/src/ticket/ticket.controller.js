import { Controller,Dependencies, Post, Req, Query, Bind, Put, Param, Get, Delete } from '@nestjs/common';
import { TicketService } from './ticket.service';


@Controller()
@Dependencies(TicketService)
export class TicketController {
    constructor(ticketService){
        this.ticketService = ticketService;
    }

    @Get('ticket')
    @Bind(Query())
    async selectticket(query){
        let airline = query.airline;
            let seat = query.seat;
            let start = query.start;
            let end = query.end;
            let date = query.date;
            let price = query.price;
            if (airline === undefined) {
                airline = String(airline);
                airline = '';
              }
            if (seat === undefined) {
                seat = String(seat);
                seat = '';
              }
             
              if (start === undefined) {
                start = String(start);
                start = '';
              }
              if (end === undefined) {
                end = String(end);
                end = '';
              }
              if (date === undefined) {
                date = String(date);
                date = '';
              }
              if (price === undefined) {
                price = String(price);
                price = '';
              }
        var data = {
            airline : airline,
            seat : seat,
            start : start,
            end : end,
            date : date,
            price : price,
        }
        console.log(data);
        return this.ticketService.selectticket(data);
    }

    @Get('ticket/:id')
    @Bind(Param())
    async findById(params){
        // console.log(params.id)
        return this.ticketService.findById(params.id);
    }

    @Post('ticket')
    @Bind(Req())
    async insertticket(req){
        return this.ticketService.insertticket(req.body);
    }

    @Put('ticket/:id')
    @Bind(Req(), Param())
    async updateticket(req, params){
        var data = {
            "id": params.id,
            "ticket": req.body
        }
        return this.ticketService.updateticket(data);
    }

    @Delete('ticket/:id')
    @Bind(Param())
    async deleteticket(params) {
        return this.ticketService.deleteticket(params.id);
    }

    @Get('airport')
    async selectairport(){
        return this.ticketService.selectairport();
    }

    @Post('airport')
    @Bind(Req())
    async insertairport(req){
        return this.ticketService.insertairport(req.body);
    }

    @Put('airport/:id')
    @Bind(Req(), Param())
    async updateairport(req, params){
        var data = {
            "id": params.id,
            "airport": req.body
        }
        return this.ticketService.updateairport(data);
    }

    @Delete('airport/:id')
    @Bind(Param())
    async deleteairport(params) {
        return this.ticketService.deleteairport(params.id);
    }

}
