import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class OrdersService {
    constructor() {
        this.client = ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: '127.0.0.1',
            port: 8899,
          },
        });
    }

    async insertOrder(data){
        return this.client.send('insertOrder',data);
    }

    async removeOrder(data){
        return this.client.send('removeOrder',data);
    }
}
