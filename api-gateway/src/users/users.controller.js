import { Controller,Dependencies, Post, Req, Bind, Put, Param, Get, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
@Dependencies(UsersService)
export class UsersController {
    constructor(usersService){
        this.usersService = usersService;
    }

    @Get()
    @Bind(Req())
    async findAll(req){
        console.log(req.session);
        // console.log(req.sessionID);
        // req.session.Users = this.usersService.findAll();
       if (!req.session || !req.session.users) {
           return {
               "mess": "error"
           }
       }else{
           
            return this.usersService.findAll(req.session);
       }
    }

    @Get(':id')
    @Bind(Param())
    async findById(params){
        if (!req.session || !req.session.users) {
            return {
                "mess": "error"
            }
        }else{
            return this.usersService.findById(params.id);
        }
        // console.log(params.id)
        
    }

    @Post()
    @Bind(Req())
    async insertUser(req){
        if (!req.session || !req.session.users) {
            return {
                "mess": "error"
            }
        }else{
            return this.usersService.insertUser(req.body);
        }
        
    }

    @Put(':id')
    @Bind(Req(), Param())
    async updateUser(req, params){
        if (!req.session || !req.session.users) {
            return {
                "mess": "error"
            }
        }else{
            var data = {
                "id": params.id,
                "user": req.body
            }
            return this.usersService.updateUser(data);
        }
        
    }

    @Delete(':id')
    @Bind(Param())
    async removeUsers(params) {
        if (!req.session || !req.session.users) {
            return {
                "mess": "error"
            }
        }else{
            return this.usersService.deleteUser(params.id);
        }
        
    }
    
    @Post('login')
    @Bind(Req())
    async login(req){
        req.session.users = {
            "email": req.body.email,
            "password": req.body.password,
        };
        console.log(req.session);
        let data = {
            "email": req.body.email,
            "password": req.body.password,
            "session": req.session
        }
        console.log(data);
        return this.usersService.login(data);
    }

    @Post('logout')
    @Bind(Req())
    async logout(req){
        return req.session.users = null;
    }


    @Post('register')
    @Bind(Req())
    async logout(req){
        return this.usersService.register(req.body);
    }

    // @Get('test')
    // async test(){
    //     return this.usersService.test();
    // }
}
