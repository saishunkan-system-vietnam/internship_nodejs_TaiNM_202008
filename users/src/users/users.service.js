import { Injectable } from '@nestjs/common';
import mysqlx from 'mysqlx';
var myTable;
@Injectable()

export class UsersService {
    async connectDB(){
        var session = await mysqlx
          .getSession({
            user: 'root',
            password: '123456',
            host: 'localhost',
            port: 33060
          })
    myTable = await session.getSchema('mydb').getTable('users');
    return myTable; 
        
    }

    async insertUser(email, password, name, phone, address, level){
        myTable = await this.connectDB();
        myTable.insert(['email','password','name','phone','address','level'])
          .values([email,password,name,phone,address,level])
          .execute();
    }

    async updateUser(id, email, password, name, phone, address, level){
        myTable = await this.connectDB();
        myTable.update()
          .set([email,password,name,phone,address,level])
          .where('id = :param')
          .bind('param',id)
          .execute();
    }

    async deleteUser(id){
        myTable = await this.connectDB();
        myTable.delete()
        .where('id = :param')
        .bind('param',id)
        .execute();
    }

    async findAll(){
        myTable = await this.connectDB();
        var result = await myTable.select()
        .execute();  
        return await result.objects; 
    }

    async findById(id){
        myTable = await this.connectDB();
        myTable.select()
        .where('id = :param')
        .bind('param',id)
        .execute(function (row) {
            console.log(row);
        });   
    }

}
