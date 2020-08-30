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
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
@Dependencies(AppService)
export class AppController {
  constructor(appService) {
    this.appService = appService;
  }

  @Get()
  getHello() {
    return this.appService.getHello();
  }
  @Get('test')
  test() {
    return this.appService.test();
  }

  @Get('ticket')
  // @Bind(Res())
  selectticket() {
    return this.appService.selectticket();
  }

  @Get('ticket/:id')
  @Bind(Param(), Res())
  async findticket(params, res) {
    try {
      let findticket = await this.appService.findticket(params.id);
      return res.json({
        status: 'success',
        code: '200',
        data: findticket,
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
      let result = await this.appService.insertticket(
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
      let result = await this.appService.updateticket(
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
      let a = await this.appService.deleteOderTicket(params.id);
      let result = await this.appService.deleteticket(params.id);
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
    try {
      let selectairport = await this.appService.selectairport();
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
      let insertairport = await this.appService.insertairport(name);
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
      let updateairport = await this.appService.updateairport(params.id, name);
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
      let deleteairport = await this.appService.deleteairport(params.id);
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
