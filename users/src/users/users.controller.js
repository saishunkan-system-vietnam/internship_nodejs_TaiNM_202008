import { Controller, Get, Dependencies, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
@Dependencies(UsersService)
export class UsersController {
    constructor(usersService){
        this.usersService = usersService;
    }

    @Get()
    selectTable(){
        return this.usersService.findAll();
    }

    @Post()
    postUser(){
        return this.usersService.insertUser();
    }

}
