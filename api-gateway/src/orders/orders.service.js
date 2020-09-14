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
    console.log('onOrdersBootstrap');
    await this.clientOrders.connect();
  }    


  async insertOrder(data){
    return this.clientOrders.send('insertOrder',data);
  }

  async findAll(){
    let data = {};
    return this.clientOrders.send('get',data);
  }

  async removeOrder(data){
    return this.clientOrders.send('removeOrder',data);
  }

  async updateStatus(data){
    return this.clientOrders.send('updateStatus',data);
  }
}