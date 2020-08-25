import { Controller, Dependencies, Get, Post, Bind, Param, Query, Req  } from '@nestjs/common';
import { DataserviceService } from './dataservice.service';

@Controller()
@Dependencies(DataserviceService)
export class DataserviceController {
    constructor(dataserviceService) {
        this.dataserviceService = dataserviceService;
      }
    
      @Get('ticket')
       selectticket() {
        // let id = params.id;
        // return id;
        return this.dataserviceService.selectticket();
      }

      @Get(":id")
      @Bind(Param())
      findticket(params) {
        return this.dataserviceService.findticket(params.id);
      }

      @Post()
      @Bind(Req())
        insertticket(req) {
        let id_airline = req.body.id_airline;
        let id_chair = req.body.id_chair;
        let number_chair = req.body.number_chair;
        let price = req.body.price;
        //console.log(req);
        console.log(a);
        return this.dataserviceService.insertticket(id_airline, id_chair,number_chair,price );
      }
}
