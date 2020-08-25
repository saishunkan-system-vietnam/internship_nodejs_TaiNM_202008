import { Controller, Get, Query, Dependencies, Post, Bind, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
@Dependencies(UsersService)
export class UsersController {
    constructor(usersService){
        this.usersService = usersService;
    }

    @Get()
    @Bind(Query())
    findAll(){
        return this.usersService.findAll();
    }

    @Get(':id')
    @Bind(Param())
    findById(params){
        // console.log(params.id);
        return this.usersService.findById(params.id);
    }

    @Post()
    insertUser(){
        return this.usersService.insertUser();
    }

}