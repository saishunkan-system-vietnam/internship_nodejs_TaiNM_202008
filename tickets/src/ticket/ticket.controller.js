import {
  Controller,
  Dependencies,
  Get,
  Post,
  Put,
  Delete,
  Bind,
  Param,
  Req,
  Res,
  Query,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
// import { queue } from '../../node_modules/rxjs/index';

@Controller()
@Dependencies(TicketService)
export class TicketController {
  constructor(ticketService) {
    this.ticketService = ticketService;
  }

    @Get('tickets/:id')
    @Bind(Param(), Res())
    async selectticket(params, res) {
      try {
        let selectticket = await this.ticketService.findticket(params.id);
        return res.json({
          status: 'success',
          code: '200',
          data: selectticket,
        });
      } catch (error) {
        console.log(error);
        return res.json({
          status: 'erro',
          code: '404',
          data: error,
        });
      }
    }

  // @Get('ticket/:id')
  // @Bind(Param(), Res())
  // async findticket(params, res) {
  //   try {
  //     console.log("aaa");
  //     let findticket = await this.ticketService.findticket(params.id);
  //     return res.json({
  //       status: 'success',
  //       code: '200',
  //       data: findticket,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     return res.json({
  //       status: 'erro',
  //       code: '404',
  //       data: error,
  //     });
  //   }
  // }

  @Get('ticket')
  @Bind(Query(), Param(), Res())
  async findticket(query, params, res) {
    try {
      let airline = query.airline;
      console.log('airline2  ' + airline);
      if (airline === undefined) {
        airline = String(airline);
        airline = '';
      }
      let seat = query.seat;
      let start = query.start;
      let end = query.end;
      let date = query.date;
      let price = query.price;
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
      console.log('aaaaaaaa');
      console.log("b " + airline);
      console.log(seat);
      console.log(start);
      console.log(end);
      console.log(date);
      let findManyticket = await this.ticketService.findManyticket(
        airline,
        seat,
        start,
        end,
        date,
        price,
      );
      console.log("findManyticket");
      console.log(findManyticket);
      return res.json({
        status: 'success',
        code: '200',
        data: findManyticket,
      });
    } catch (error) {
      console.log(error);
      return res.json({
        status: 'erro',
        code: '404',
        data: error,
      });
    }
  }

  @Post('ticket')
  @Bind(Req(), Res())
  async insertticket(req, res) {
    try {
      let airline_id = req.body.airline_id;
      let start = req.body.start;
      let end = req.body.end;
      let date = req.body.date;
      let number_seat = req.body.number_seat;
      let price = req.body.price;
      let seat_id = req.body.seat_id;
      console.log(airline_id);
      let result = await this.ticketService.insertticket(
        airline_id,
        seat_id,
        start,
        end,
        date,
        number_seat,
        price,
      );
      // console.log(name);
      return res.json({
        mess: 'susscess',
        code: 200,
        data: req.body,
      });
    } catch (error) {
      console.log(error);
      return res.json({
        status: 'erro',
        code: '404',
        data: error,
      });
    }
  }

  @Put('ticket/:id')
  @Bind(Param(), Req(), Res())
  async updateticket(params, req, res) {
    try {
      let airline_id = req.body.airline_id;
      let start = req.body.start;
      let end = req.body.end;
      let date = req.body.date;
      let number_seat = req.body.number_seat;
      let price = req.body.price;
      let seat_id = req.body.seat_id;
      //console.log(name);
      let result = await this.ticketService.updateticket(
        params.id,
        airline_id,
        seat_id,
        start,
        end,
        date,
        number_seat,
        price,
      );
      return res.json({
        mess: 'susscess',
        code: 200,
        data: req.body,
      });
    } catch (error) {
      console.log(error);
      return res.json({
        status: 'erro',
        code: '404',
        data: error,
      });
    }
  }

  @Delete('ticket/:id')
  @Bind(Param(), Res())
  async deleteticket(params, res) {
    try {
      let a = await this.ticketService.deleteOderTicket(params.id);
      let result = await this.ticketService.deleteticket(params.id);
      return res.json({
        mess: 'susscess',
        code: 200,
      });
    } catch (error) {
      console.log(error);
      return res.json({
        status: 'erro',
        code: '404',
        data: error,
      });
    }
  }

  //airport
  @Get('airport')
  @Bind(Res())
  async selectairport(res) {
    //return"1";
    try {
      let selectairport = await this.ticketService.selectairport();
      return res.json({
        status: 'success',
        code: '200',
        data: selectairport,
      });
    } catch (error) {
      console.log(error);
      return res.json({
        status: 'erro',
        code: '404',
        data: error,
      });
    }
  }

  @Post('airport')
  @Bind(Req(), Res())
  async insertairport(req, res) {
    try {
      let name = req.body.name;
      let insertairport = await this.ticketService.insertairport(name);
      return res.json({
        mess: 'susscess',
        code: 200,
        data: req.body,
      });
    } catch (error) {
      console.log(error);
      return res.json({
        status: 'erro',
        code: '404',
        data: error,
      });
    }
  }
  @Put('airport/:id')
  @Bind(Param(), Req(), Res())
  async updateairport(params, req, res) {
    try {
      let name = req.body.name;
      let updateairport = await this.ticketService.updateairport(
        params.id,
        name,
      );
      return res.json({
        mess: 'susscess',
        code: 200,
        data: req.body,
      });
    } catch (error) {
      console.log(error);
      return res.json({
        status: 'erro',
        code: '404',
        data: error,
      });
    }
  }
  @Delete('airport/:id')
  @Bind(Param(), Res())
  async deleteairport(params, res) {
    try {
      let deleteairport = await this.ticketService.deleteairport(params.id);
      return res.json({
        mess: 'susscess',
        code: 200,
      });
    } catch (error) {
      console.log(error);
      return res.json({
        status: 'erro',
        code: '404',
        data: error,
      });
    }
  }
}
