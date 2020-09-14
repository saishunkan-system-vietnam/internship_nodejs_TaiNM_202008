  
import { Controller, Get, Dependencies, Post, Body, Bind, Req, Param, Put, Delete } from '@nestjs/common';
import { CategoryService } from './category/category.service';
import { MessagePattern, Payload  } from '@nestjs/microservices';
import validator from 'validator'


@Controller('category')
@Dependencies(CategoryService)
export class CategoryController {
    constructor(categoryService){
        this.categoryService = categoryService;
    }

    // For airline
    @Bind(Payload())
    @MessagePattern('findAllAirline')
    async findAllAirline(data){
        // console.log(data)
        try {
            let arr = await this.categoryService.findAllAirline();
            var keys = ['alID','alCode','alName'];
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

    @Bind(Payload())
    @MessagePattern('findAirlineById')
    async findAirlineById(data){
       try {
        let arr = await this.categoryService.findAirlineById(data);
        var keys = ['alID','alCode','alName'];
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
           console.log(error);
       }
    }

    @Bind(Payload())
    @MessagePattern('insertAirline')
    async insertAirline(data){
        console.log(data.data);
        // var airline = data;
        try {
            // if(validator.isEmpty(airline.alCode,{ ignore_whitespace: true })){
            //     throw "Airline code should not be empty!";
            // }
            // if(validator.isEmpty(airline.alName,{ ignore_whitespace: true })){
            //     throw "Airline name should not be empty!";
            // }
            await this.categoryService.insertAirline(data.data.alCode, data.data.alName);
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
    @MessagePattern('updateAirline')
    async updateAirline(data) {
        console.log(data);
        // var airline = data;
        try {
            // let alCode = airline.alCode;
            // let alName = airline.alName;
            await this.categoryService.updateAirline(data.alID, data.alCode, data.alName);
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
    @MessagePattern('deleteAirline')
    deleteAirline(data) {
       try {
            this.categoryService.deleteAirline(data);
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

    // For seat
    @Bind(Payload())
    @MessagePattern('findAllSeat')
    async findAllSeat(data){
        try {
            let arr = await this.categoryService.findAllSeat();
            var keys = ['sID','sName'];
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

    @Bind(Payload())
    @MessagePattern('findSeatById')
    async findSeatById(data){
       try {
        let arr = await this.categoryService.findSeatById(data);
        var keys = ['sID','sName'];
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
           console.log(error);
       }
    }

    @Bind(Payload())
    @MessagePattern('insertSeat')
    async insertSeat(data){
        console.log(data.data);
        try {
            if(validator.isEmpty(data.data,{ ignore_whitespace: true })){
                throw "Name of seat should not be empty!";
            }
            await this.categoryService.insertSeat(data.data);
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
    @MessagePattern('updateSeat')
    async updateSeat(data) {
        console.log(data)
        try {

            await this.categoryService.updateSeat(data.sID, data.sName);
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
    @MessagePattern('deleteSeat')
    deleteSeat(data) {
       try {
            this.categoryService.deleteSeat(data);
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
   
    // for category
    @MessagePattern('findAllSeatByAirline')
    async findAllSeatByAirline(){
        try {
            let arr = await this.categoryService.findAllSeatByAirline();
            var keys = ['alID','alCode','alName','sID','sName'];
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

    @Bind(Payload())
    @MessagePattern('getSeatByAirline')
    async findSeatByAirline(data){
       try {
        let arr = await this.categoryService.findSeatById(data);
        var keys = ['alID'];
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
           console.log(error);
       }
    }

    @Bind(Payload())
    @MessagePattern('insertCategory')
    async insertCategory(data){
        console.log(data)
        try {
            for (let i=0; i<data.data.sID.length; i++) {
                await this.categoryService.insertCategory(data.data.alID, data.data.sID[i]);
            }
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
    @MessagePattern('deleteCategoryByAirline')
    deleteCategoryByAl(data) {
       try {
            this.categoryService.deleteCategoryByAl(data);
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
    @MessagePattern('deleteCategoryBySeat')
    deleteCategoryBySeat(data) {
       try {
            this.categoryService.deleteCategoryBySeat(data);
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
    @MessagePattern('deleteCategoryByAlnSeat')
    deleteCategoryByAirlineAndSeat(data) {
        console.log(data)
       try {
            this.categoryService.deleteCategoryByAirlineAndSeat(data.alID, data.sID);
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