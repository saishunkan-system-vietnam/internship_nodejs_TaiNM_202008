import { Injectable, Dependencies } from '@nestjs/common';
// import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
@Dependencies('Orders')
export class OrdersService {
  constructor(clientOrders) {
    this.clientOrders = clientOrders;
  }

  onModuleInit() {
      console.log('onModuleInit');
    }

  async onApplicationBootstrap() {
    console.log('onApplicationBootstrap');
    await this.clientOrders.connect();
  }    


    async insertOrder(data){
        return this.clientOrders.send('insertOrder',data);
    }

    async removeOrder(data){
        return this.clientOrders.send('removeOrder',data);
    }
}
