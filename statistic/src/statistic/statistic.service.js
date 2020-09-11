import { Injectable } from '@nestjs/common';
import mysqlx from '@mysql/xdevapi';

var myTable;
var session;
@Injectable()
export class StatisticService {
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

    async closeDB(){
        session.close();
    }

    async getSchema(){
        myTable = await session.getSchema('mydb').getTable('orders');
        return myTable; 
    }

    async findStatus(status){
        await this.connectDB();
        await session.sql('USE mydb;').execute();
        let result = await session.sql('SELECT * FROM orders WHERE status = ?').bind(status).execute();
        await this.closeDB();
        return result.fetchAll();
        // await this.closeDB();
    }
}
