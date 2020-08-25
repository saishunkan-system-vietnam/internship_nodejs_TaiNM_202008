import { Injectable } from '@nestjs/common';
import mysqlx from '@mysql/xdevapi';

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
        myTable.insert(['email','password','name','phone','address','level'])
          .values([email,password,name,phone,address,level])
          .execute();
    }

    async updateUser(id, email, password, name, phone, address, level){
        await this.connectDB();
        await this.getSchema();
        myTable.update()
          .set([email,password,name,phone,address,level])
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

}
