import { Controller, Dependencies, Get, Post, Put, Delete, Bind, Param, Query, Req, Res } from '@nestjs/common';
import { TicketService } from './ticket.service';

@Controller()
@Dependencies(TicketService)
export class TicketController {

    constructor(ticketService) {
        this.ticketService = ticketService;
      }

    @Get('ticket')
    @Bind(Res())
    async selectticket(res) {
        try {
        let selectticket = await this.ticketService.selectticket();
        return res.json({
            status: "success",
            code: "200",
            data: selectticket,
            });
        } catch (error) {
        console.log(error);
        return res.json({
            status: "erro",
            code: "404",
            data: error,
            });
        }
       
     }

    @Get("ticket/:id")
    @Bind(Param(), Res())
        async findticket(params, res) {
        try {
            let findticket = await this.ticketService.findticket(params.id);
            return res.json({
                status: "success",
                code: "200",
                data: findticket,
                });   
        } catch (error) {
            console.log(error);
            return res.json({
                status: "erro",
                code: "404",
                data: error,
                });   
        }
        
     }

    @Post()
    @Bind(Req(), Res())
        async insertticket(req,res) {
            try {
                let name = req.body.name;
                let flight_time = req.body.flight_time;
                let id_airline = req.body.id_airline;
                let id_seat = req.body.id_seat;
                let number_seat = req.body.number_seat;
                let price = req.body.price;
                let result = await this.ticketService.insertticket(name,flight_time,id_airline, id_seat,number_seat,price );
                // console.log(name);
                return res.json({
                    mess:"susscess",
                    code: 200,
                    data: req.body
                });
            } catch (error) {
                console.log(error);
                return res.json({
                    status: "erro",
                    code: "404",
                    data: error,
                    });
            }
     }

    @Put(":id")
    @Bind(Param(), Req())
        updateticket(params,req) {
        let name = req.body.name;
        let flight_time = req.body.flight_time;
        let id_airline = req.body.id_airline;
        let id_seat = req.body.id_seat;
        let number_seat = req.body.number_seat;
        let price = req.body.price;
        //console.log(name);
        return this.ticketService.updateticket(params.id,name,flight_time,id_airline, id_seat,number_seat,price );
    }
    
    @Delete(":id")
    @Bind(Param())
        delete(params) {
        return this.ticketService.deleteticket(params.id);
    }
    
}
