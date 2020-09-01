import { Controller, Dependencies, Bind } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
import validator from 'validator';


@Controller('users')
@Dependencies(UsersService)
export class UsersController {
    
    constructor(usersService){
        this.usersService = usersService;
    }

    @MessagePattern('get')
    async findAll(){
        try {
            let arr = await this.usersService.findAll();
            var keys = ['id','email','password','name','phone','address','level','create'];

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

    @Bind(Payload())
    @MessagePattern('findById')
    async findById(data){
        // console.log(data);
       try {
        let arr = await this.usersService.findById(data);
        var keys = ['id','email','password','name','phone','address','level','create'];
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
    @MessagePattern('insertUser')
    async insertUser(data){
        var user = data;
        try {
            // console.log(user);
            if(validator.isEmpty(user.password,{ ignore_whitespace: true })){
                throw "Pass không hợp lệ!";
            }
            let email = user.email;
            let password = await this.usersService.bcryptPass(user.password);
            let name = user.name;
            let phone = user.phone;
            let address = user.address;
            let level = user.level;
            await this.usersService.insertUser(email, password, name, phone, address, level);
            return {
                "mess": "success",
                "data": user
            }
        } catch (error) {
            return {
                "mess": "error"
            }
        }
        
    }

    @Bind(Payload())
    @MessagePattern('updateUser')
    async updateUser(data) {
        // console.log(data);
        var user = data.user;
        try {
            let email = user.email;
            let password = await this.usersService.bcryptPass(user.password);
            let name = user.name;
            let phone = user.phone;
            let address = user.address;
            let level = user.level;
            await this.usersService.updateUser(data.id, email, password, name, phone, address, level);
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
    @MessagePattern('deleteUser')
    removeUsers(data) {
       try {
            this.usersService.deleteUser(data);
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