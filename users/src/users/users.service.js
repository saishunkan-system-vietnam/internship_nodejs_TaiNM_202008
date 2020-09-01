import { Injectable } from '@nestjs/common';
import mysqlx from '@mysql/xdevapi';
import bcrypt from 'bcrypt';
import validator from 'validator';
  

var myTable;
var session;
@Injectable()

export class UsersService {
    
    async connectDB(){
        session = await mysqlx
          .getSession({
            user: 'root',
            password: '123456',
            host: 'localhost',
            port: 33060
          })
        return session;
    }

    async getSchema(){
        myTable = await session.getSchema('mydb').getTable('users');
        return myTable; 
    }

    async insertUser(email, password, name, phone, address, level){
        await this.connectDB();
        await this.getSchema();
        if(!validator.isEmail(email) || validator.isEmpty(email)){
            throw "Email không hợp lệ!";
        }
        if(validator.isEmpty(name,{ ignore_whitespace: true })){
            throw "Name không hợp lệ!";
        }
        myTable.insert(['email','password','name','phone','address','level'])
          .values([email,password,name,phone,address,level])
          .execute();
    }

    async updateUser(id, newEmail, newPassword, newName, newPhone, newAddress, newLevel){
        await this.connectDB();
        await this.getSchema();
        myTable.update()
          .set('email',newEmail)
          .set('password',newPassword)
          .set('name',newName)
          .set('phone',newPhone)
          .set('address',newAddress)
          .set('level',newLevel)
          .where('id = :param')
          .bind('param',id)
          .execute();
    }

    async deleteUser(id){
        await this.connectDB();
        await this.getSchema();
        myTable.delete()
        .where('id = :param')
        .bind('param',id)
        .execute();
    }

    async findAll(){
        await this.connectDB();
        await this.getSchema();
        let result = await myTable.select()
        .execute();  
        return result.fetchAll(); 
    }

    async findById(id){
        await this.connectDB();
        await this.getSchema();
        let result = await myTable.select()
        .where('id = :param')
        .bind('param',id)
        .execute();
        return result.fetchAll();
        // await this.connectDB();
        // await session.sql('use mydb').execute();
        // var result = await session.sql('SELECT * FROM users').execute();

        // console.log(result.fetchAll());
    }

    async bcryptPass(string){
        var saltRounds = 10;
        let password = await bcrypt.hash(string, saltRounds);
        return password;
    }

    // async passCompare(password){
    //     return bcrypt.compare(password, hash);
    // }

}
