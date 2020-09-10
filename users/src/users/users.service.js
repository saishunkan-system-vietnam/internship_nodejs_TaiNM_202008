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

    closeDB(){
        session.close();
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
        await myTable.insert(['email','password','name','phone','address','level'])
          .values([email,password,name,phone,address,level])
          .execute();
        this.closeDB();
    }

    async updateUser(id, newEmail, newName, newPhone, newAddress, newLevel){
        await this.connectDB();
        await this.getSchema();
        await myTable.update()
          .set('email',newEmail)
          .set('name',newName)
          .set('phone',newPhone)
          .set('address',newAddress)
          .set('level',newLevel)
          .where('id = :param')
          .bind('param',id)
          .execute();
        this.closeDB();
    }

    async deleteUser(id){
        await this.connectDB();
        await this.getSchema();
        await myTable.delete()
        .where('id = :param')
        .bind('param',id)
        .execute();
        this.closeDB();
    }

    async findAll(){
        await this.connectDB();
        await this.getSchema();
        let result = await myTable.select()
        .execute();  
        this.closeDB();
        return result.fetchAll(); 
    }

    async findById(id){
        await this.connectDB();
        await this.getSchema();
        let result = await myTable.select()
        .where('id = :param')
        .bind('param',id)
        .execute();
        this.closeDB();
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
    async registerUser(email, password, name, phone, address, level) {
        await this.connectDB();
        await this.getSchema();
        
        let findEmail = await myTable.select()
                                        .where('email = :param')
                                        .bind('param',email)
                                        .execute();
        let user = findEmail.fetchAll();
        //console.log(findEmail.fetchAll().length);
        // console.log(user.length);
          if(user.length !== 0){
              throw "Email NOT FOUND"
          }
        await myTable.insert(['email','password','name','phone','address','level'])
          .values([email,password,name,phone,address,level])
          .execute();
        
    }


    // async loginUser(email, password, session) {
    //     await this.connectDB();
    //     await this.getSchema();
    //     let findEmail = await myTable.select()
    //     .where('email = :param')
    //     .bind('param',email)
    //     .execute();
    //     let user = findEmail.fetchAll();
    //     //console.log(findEmail.fetchAll().length);
    //     if(user.length == 0){
    //         throw "Email NOT FOUND"
    //     }
    //     let data = bcrypt.compareSync(password, user[0][2]);
    //     if( data == false){
    //         throw "Passwor NOT FOUND"
    //     }
    //     // console.log(session);
    //     if(!session.user){
    //         session.user = {
    //         id: user[0][0],
    //         email: user[0][1],
    //         };
    //     }else{
    //         session.user = {
    //             id: user[0][0],
    //             email: user[0][1],
    //         }
    //     }
    //     // console.log(session);
    //     // console.log(user[0][0]);
    //     return session;
    // }

}