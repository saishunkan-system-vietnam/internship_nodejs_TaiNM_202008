import { Injectable,Dependencies } from '@nestjs/common';
import { zip } from '../../node_modules/rxjs/index';

// import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
@Dependencies(['Statistic','Users'])
export class StatisticService {
    constructor(clientStatistic,clientUsers) {
        this.clientStatistic = clientStatistic;
        this.clientUsers = clientUsers;
    }

    onModuleInit() {
        console.log('onModuleInit');
      }
    
      async onApplicationBootstrap() {
        console.log('onStatisticBootstrap');
        await this.clientStatistic.connect();
        await this.clientUsers.connect();
      }    

    findStatus(){
        const payload = {};
        // test
        return zip(
            this.clientStatistic.send('get',payload),
            this.clientUsers.send('get',payload)
        );

    }

}
