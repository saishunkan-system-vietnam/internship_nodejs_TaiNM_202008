  
import { Controller, Get, Dependencies, Post, Body, Bind, Req, Param, Put, Delete } from '@nestjs/common';
import { CategoryService } from './category/category.service';
import { MessagePattern, Payload  } from '@nestjs/microservices';


@Controller('category')
@Dependencies(CategoryService)
export class CategoryController {
    constructor(categoryService){
        this.categoryService = categoryService;
    }

    // For airline
    @MessagePattern('getAirline')
    async findAllAirline(){
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
    @MessagePattern('getAirlineByID')
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
        console.log(data);
        // var airline = data;
        try {
            // if(validator.isEmpty(airline.alCode,{ ignore_whitespace: true })){
            //     throw "Airline code should not be empty!";
            // }
            // if(validator.isEmpty(airline.alName,{ ignore_whitespace: true })){
            //     throw "Airline name should not be empty!";
            // }
            let alCode = data.alCode;
            let alName = data.alName;
            await this.categoryService.insertAirline(alCode, alName);
            return {
                "mess": "success",
                "data": airline
            }
        } catch (error) {
            return {
                "mess": "error"
            }
        }
        
    }

    @Bind(Payload())
    @MessagePattern('updateAirline')
    async updateUser(data) {
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
    @MessagePattern('getSeat')
    async findAllSeat(){
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
    @MessagePattern('getSeatByID')
    async findSeatById(data){
       try {
        let arr = await this.categoryService.findSeatById(data);
        var keys = ['alID','sName'];
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
    async insertAirline(data){
        var seat = data;
        try {
            if(validator.isEmpty(seat.sName,{ ignore_whitespace: true })){
                throw "Name of seat should not be empty!";
            }
            let sName = seat.sName;
            await this.categoryService.insertSeat(sName);
            return {
                "mess": "success",
                "data": seat
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
        var seat = data;
        try {
            let sName = seat.sName;
            await this.categoryService.updateSeat(data.id, sName);
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
    @MessagePattern('getAllSeatByAirline')
    async findAllSeatByAirline(){
        try {
            let arr = await this.categoryService.findAllSeat();
            var keys = ['alID','sID'];
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
        var category = data;
        try {
            let alID = category.sName;
            let sID = category.sID;
            await this.categoryService.insertSeat(alID, sID);
            return {
                "mess": "success",
                "data": category
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
        var category = data;
       try {
            let alID = category.alID;
            let sID = category.sID;
            this.categoryService.deleteCategoryByAirlineAndSeat(alID, sID);
            return {
                "mess": "success",
                "data": category
            }
       } catch (error) {
            return {
                "mess": "error"
            }
       }
    }

}