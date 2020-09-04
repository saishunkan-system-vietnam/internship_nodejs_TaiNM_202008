import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class TicketService {
    constructor() {
        this.client = ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: '127.0.0.1',
            port: 8080,
          },
        });
    }

    async findAll(){
        let data = {};
        return this.client.send('get',data);
    }

    async findById(data){
        return this.client.send('findById',data);
    }

    async insertticket(data){
       return this.client.send('insertticket',data);
    }

    async updateticket(data){
        return this.client.send('updateticket',data);
    }

    async deleteticket(data){
        return this.client.send('deleteticket',data);
    }

    async selectairport(){
        let data = {};
        return this.client.send('selectairport',data);
    }

    async insertairport(data){
       return this.client.send('insertairport',data);
    }

    async updateairport(data){
        return this.client.send('updateairport',data);
    }

    async deleteairport(data){
        console.log(data);
        return this.client.send('deleteairport',data);
    }

}
