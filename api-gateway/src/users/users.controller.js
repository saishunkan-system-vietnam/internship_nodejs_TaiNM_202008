import { Controller,Dependencies, Post, Req, Bind, Put, Param, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
@Dependencies(UsersService)
export class UsersController {
    constructor(usersService){
        this.usersService = usersService;
    }

    @Get()
    async findAll(){
        return this.usersService.findAll();
    }
    @Post()
    @Bind(Req())
    async insertUser(req){
        return this.usersService.insertUser(req.body);
    }

    @Put(':id')
    @Bind(Req(), Param())
    async updateUser(req, params){
        var data = {
            "id": params.id,
            "user": req.body
        }
        return this.usersService.updateUser(data);
    }
}
