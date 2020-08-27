import { Controller, Dependencies, Get, Post, Put, Delete, Bind, Param, Req, Res } from '@nestjs/common';
import { AirportService } from './airport.service';

@Controller()
@Dependencies(AirportService)
export class AirportController {

    constructor(airportService) {
        this.airportService = airportService;
      }
    // @Get()
    // hello() {
    //     this.airportService.hello();
    // }

    //airport
    @Get('airport')
    @Bind(Res())
    async selectairport(res) {
        //return"1";
        try {
        let selectairport = await this.airportService.selectairport();
        return res.json({
            status: "success",
            code: "200",
            data: selectairport,
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

     @Post("airport")
     @Bind(Req(), Res())
         async insertairport(req,res) {
             try {
                 let name = req.body.name;
                 let insertairport = await this.airportService.insertairport(name);
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
      @Put("airport/:id")
      @Bind(Param(), Req(), Res())
          async updateairport(params, req, res) {
              try {
                  let name = req.body.name;
                  let updateairport = await this.airportService.updateairport(params.id, name); 
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
      @Delete("airport/:id")
      @Bind(Param(), Res())
      async delete(params, res) {
          try {
              let deleteairport = await this.airportService.deleteairport(params.id);
              return res.json({
                  mess:"susscess",
                  code: 200,
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
}
