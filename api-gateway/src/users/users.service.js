import { Injectable, Dependencies } from '@nestjs/common';
import mysqlx from '@mysql/xdevapi';
import bcrypt from 'bcrypt';

var myTable;
var session;
@Injectable()
@Dependencies('Users')
export class UsersService {
    constructor(clientUsers) {
        this.clientUsers = clientUsers;
    }

    onModuleInit() {
        console.log('onModuleInit');
      }
    
      async onApplicationBootstrap() {
        console.log('onUsersBootstrap');
        await this.clientUsers.connect();
      }    

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

    closeDB(){
        session.close();
    }

    async getSchema(){
        myTable = await session.getSchema('mydb').getTable('users');
        return myTable; 
    }


    async insertUser(data){
        // console.log(data);
       return this.clientUsers.send('insertUser',data);
    }

    async updateUser(data){
        return this.clientUsers.send('updateUser',data);
    }

    async findAll(data){
        return this.clientUsers.send('get',data);
    }

    async findById(data){
        return this.clientUsers.send('findById',data);
    }

    async deleteUser(data){
        return this.clientUsers.send('deleteUser',data);
    }

    // async login(data){
    //     return this.clientUsers.send('login',data);
    // }

    async register(data){
        return this.clientUsers.send('register',data);
    }

    async loginUser(email, password, session) {
        await this.connectDB();
        await this.getSchema();
        let findEmail = await myTable.select()
        .where('email = :param')
        .bind('param',email)
        .execute();
        let user = findEmail.fetchAll();
        //console.log(findEmail.fetchAll().length);
        if(user.length == 0){
            throw "Email NOT FOUND"
        }
        let data = bcrypt.compareSync(password, user[0][2]);
        if( data == false){
            throw "Passwor NOT FOUND"
        }
        // console.log(session);
        if(!session.user){
            session.user = {
                id: user[0][0],
                email: user[0][1],
                level: user[0][6]
            };
        }else{
            session.user = {
                id: user[0][0],
                email: user[0][1],
                level: user[0][6]
            }
        }
        // console.log(session);
        // console.log(user[0][0]);
        this.closeDB();
        return session;
    }
}
