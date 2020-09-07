import { Injectable, Dependencies } from '@nestjs/common';

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
        console.log('onApplicationBootstrap');
        await this.clientUsers.connect();
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

    async login(data){
        return this.clientUsers.send('login',data);
    }

    async register(data){
        return this.clientUsers.send('register',data);
    }
}
