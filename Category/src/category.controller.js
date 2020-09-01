  
import { Controller, Get, Dependencies, Post, Body, Bind, Req, Param, Put, Delete } from '@nestjs/common';
import { CategoryService } from './category/category.service';
import { MessagePattern } from '@nestjs/microservices';


@Controller('category')
@Dependencies(CategoryService)
export class CategoryController {
    constructor(categoryService){
        this.categoryService = categoryService;
    }

    @MessagePattern()
    selectTable(){
        // return this.categoryService.getTable('airlineName');
        // return this.categoryService.insertAirline('VNA', 'Vietnam Airlines', 'Vietnam');
        // return this.categoryService.findAllAirline();
        // return this.categoryService.findAllAirLine();
        // return this.categoryService.findAirlineById(2);
        return this.categoryService.insertSeat('test1');
        // return this.categoryService.findSeatByAirlineById(1);
    }

    @MessagePattern(':id')
    @Bind(Param())
    updateAir(params){
        return this.categoryService.updateAirline(params.id,'HNB', 'Test2');
    }

    // @Post('category')
    // postUser(){
    //     return this.categoryService.insertAirline('VNA', 'Vietnam Airlines', 'Vietnam');
    // }

    @MessagePattern()
    @Bind(Req())
    async testrequest(req) {
        // console.log(req.body);
        let alCode = req.body.alCode;
        let alName = req.body.alName;
        let seat = await this.categoryService.findAllSeat();

        // console.log(seat);
        let allAirline = await this.categoryService.findAllAirline();
        // console.log (allAirline[allAirline.length-1][0]);
        for (let i=0; i<seat.length; i++) {
            this.categoryService.insertAirline(alCode, alName);
            this.categoryService.insertCategory(allAirline[allAirline.length-1][0], seat[i][0]);
        }
    }

    @MessagePattern(':id')
    @Bind(Param())
    deleteAir(params){
        return this.categoryService.deleteAirline(params.id);
    }
   
}