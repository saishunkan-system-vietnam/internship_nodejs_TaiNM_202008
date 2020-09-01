import { Injectable, Dependencies } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class StatisticService {
    constructor() {
        this.client = ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: '127.0.0.1',
            port: 8877,
          },
        });
    }

    findStatus(){
        const payload = {};
        return this.client.send('get',payload);
    }

}
