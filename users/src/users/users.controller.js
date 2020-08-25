import { Controller, Get, Query, Dependencies, Post, Bind, Param, Body, Res, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import bcrypt from 'bcrypt';

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
    @Bind(Req())
    async insertUser(req){
        let email = req.body.email;
        //  req.body.password;
        let password = await this.usersService.bcryptPass(req.body.password);
        let name = req.body.name;
        let phone = req.body.phone;
        let address = req.body.address;
        let level = req.body.level;
        
        // console.log(password);
        return this.usersService.insertUser(email, password, name, phone, address, level);

        // console.log(req.body.name);
    }

}