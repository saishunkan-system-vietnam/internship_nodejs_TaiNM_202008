import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class UsersService {
    constructor() {
        this.client = ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: '127.0.0.1',
            port: 8888,
          },
        });
    }

    async insertUser(data){
        // console.log(data);
       return this.client.send('insertUser',data);
    }

    async updateUser(data){
        return this.client.send('updateUser',data);
    }

    async findAll(){
        let data = {};
        return this.client.send('get',data);
    }
}
