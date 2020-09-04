  
import { Controller, Get, Dependencies, Post, Body, Bind, Req, Param, Put, Delete } from '@nestjs/common';
import { CategoryService } from './category/category.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import validator from 'validator';


@Controller('category')
@Dependencies(CategoryService)
export class CategoryController {
    constructor(categoryService){
        this.categoryService = categoryService;
    }

    @MessagePattern('getAirline')
    async findAllAirline(){
        try {
            let arr = await this.categoryService.findAllAirline();
            var keys = ['alID','alCode','alName'];

            //vacate keys from main array
            var newArr = arr.slice(0, arr.length);

            var formatted = [],
            data = newArr,
            cols = keys,
            l = cols.length;
            for (var i=0; i<data.length; i++) {
                    var d = data[i],
                            o = {};
                    for (var j=0; j<l; j++)
                            o[cols[j]] = d[j];
                    formatted.push(o);
            }
            return {
                "mess": "success",
                "data": formatted
            };
        } catch (error) {
            console.log(error)
        }
    }

    @MessagePattern('getSeat')
    async findAllSeat(){
        try {
            let arr = await this.categoryService.findAllSeat();
            var keys = ['sID','sName'];

            //vacate keys from main array
            var newArr = arr.slice(0, arr.length);

            var formatted = [],
            data = newArr,
            cols = keys,
            l = cols.length;
            for (var i=0; i<data.length; i++) {
                    var d = data[i],
                            o = {};
                    for (var j=0; j<l; j++)
                            o[cols[j]] = d[j];
                    formatted.push(o);
            }
            return {
                "mess": "success",
                "data": formatted
            };
        } catch (error) {
            console.log(error)
        }
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