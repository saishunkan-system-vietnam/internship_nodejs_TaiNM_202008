import { Controller, Get, Query, Dependencies, Post, Bind, Param, Req, Put, Delete, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import validator from 'validator';

@Controller('users')
@Dependencies(UsersService)
export class UsersController {
    constructor(usersService){
        this.usersService = usersService;
    }

    @Get()
    @Bind(Res())
    async findAll(res){
        try {
            let resutl = await this.usersService.findAll();
            return res.json({
                mess: "success",
                data: resutl
            });
        } catch (error) {
            console.log(error)
        }
    }

    @Get(':id')
    @Bind(Param(), Res())
    async findById(params,res){
        // console.log(params.id);
       try {
        let resutl = await this.usersService.findById(params.id);
        return res.json({
            mess: "success",
            data: resutl
        });
       } catch (error) {
           console.log(error);
       }
    }

    @Post()
    @Bind(Req(), Res())
    async insertUser(req,res){
        try {
            if(validator.isEmpty(req.body.password,{ ignore_whitespace: true })){
                throw "Pass không hợp lệ!";
            }
            let email = req.body.email;
        //  req.body.password;
            let password = await this.usersService.bcryptPass(req.body.password);
            let name = req.body.name;
            let phone = req.body.phone;
            let address = req.body.address;
            let level = req.body.level;
            
            // console.log(password);
            await this.usersService.insertUser(email, password, name, phone, address, level);
            return res.json({
                mess:"success",
                data: req.body
            });
        } catch (error) {
            return res.json({
                mess: error
            });
        }

        // console.log(req.body.name);
    }

    @Put(':id')
    @Bind(Param(), Req(), Res())
    async updateUser(params, req, res) {
        try {
            let email = req.body.email;
        //  req.body.password;
            let password = await this.usersService.bcryptPass(req.body.password);
            let name = req.body.name;
            let phone = req.body.phone;
            let address = req.body.address;
            let level = req.body.level;
            
            // console.log(password);
            await this.usersService.updateUser(params.id, email, password, name, phone, address, level);
            return res.json({
                mess:"success",
                data: req.body
            });
        } catch (error) {
            return res.json({
                mess: error
            });
        }

    }

    @Delete(':id')
    @Bind(Param(), Res())
    removeUsers(params,res) {
       try {
            this.usersService.deleteUser(params.id);
            return res.json({
                mess:"success",
            });
       } catch (error) {
            return res.json({
                mess: error
            });
       }
    }

}