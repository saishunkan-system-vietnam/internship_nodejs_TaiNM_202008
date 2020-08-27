  
import { Controller, Get, Dependencies, Post, Body, Bind, Req, Param, Put, Delete } from '@nestjs/common';
import { CategoryService } from './category/category.service';


@Controller()
@Dependencies(CategoryService)
export class CategoryController {
    constructor(categoryService){
        this.categoryService = categoryService;
    }

    @Get()
    selectTable(){
        // return this.categoryService.getTable('airlineName');
        // return this.categoryService.insertAirline('VNA', 'Vietnam Airlines', 'Vietnam');
        // return this.categoryService.findAllAirline();
        return this.categoryService.findAllTypeOfSeat();
        // return this.categoryService.findAirlineById('VNA');
        // return this.categoryService.insertAirline('HNA', 'test1', 'Viet Nam');
        // return this.categoryService.updateAirline('HNA', 'alID', 'NewName');
    }

    @Put(':id')
    @Bind(Param())
    updateAir(params){
        return this.categoryService.updateAirline(params.id,'dsds', 'aaaaaa', 'Viet Nam');
    }

    // @Post('category')
    // postUser(){
    //     return this.categoryService.insertAirline('VNA', 'Vietnam Airlines', 'Vietnam');
    // }

    @Post()
    @Bind(Req())
    testrequest(req) {
        console.log(req.body);
    }

    @Delete(':id')
    @Bind(Param())
    deleteAir(params){
        return this.categoryService.deleteAirline(params.id);
    }
   
}