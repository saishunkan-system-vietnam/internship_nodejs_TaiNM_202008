import { Controller,Dependencies, Post, Req, Bind, Put, Param, Get, Delete } from '@nestjs/common';
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

    @Get(':id')
    @Bind(Param())
    async findById(params){
        // console.log(params.id)
        return this.usersService.findById(params.id);
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

    @Delete(':id')
    @Bind(Param())
    async removeUsers(params) {
        return this.usersService.deleteUser(params.id);
    }
}
