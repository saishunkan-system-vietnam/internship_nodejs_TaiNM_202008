import { Injectable } from '@nestjs/common';
import  mysqlx  from '@mysql/xdevapi';
//import mysqlx from 'mysqlx';
//var mysqlx = require('mysqlx');
var mydb;
var db;


@Injectable()
export class DataserviceService {
   
    async connectdatabase() {
        db = await mysqlx.getSession({
            host: '192.168.10.137',
            port: 33060,        
            user: 'chungpv', 
            password: '1', });
        // mydb = await db.getSchema('mydb');
        //  myTable = await mydb.getTable('tickets');
        return db;
    }

    async getSchema() {
        mydb = await db.getSchema('mydb').getTable('tickets');
        return mydb;
    }

    async selectticket() {
        // await this.connectdatabase();
        // let tickets = await this.getSchema();
        // let select =  await tickets
        //             .select()
        //             .execute();
        // console.log(select);
        // return select.fetchAll();

        //su dung truy van query thuong
        await this.connectdatabase();
        await db.sql('use mydb').execute();
        var result = await db.sql('SELECT * FROM tickets').execute();
        return result.fetchAll();
    }

    async findticket(id) {
        await this.connectdatabase();
        let tickets = await this.getSchema();
        let select =   await tickets.select()
                    .where('id = :param')
                    .bind('param',id)
                    .execute()
        console.log(select);
        return select.fetchAll();
    }
//
    async insertticket() {
        let user = await this.connectdatabase();
        let insert = await user.insert('id','name').values(20,'chung1').execute();
        console.log(insert);
    }

    async updateticket() {
        let user = await this.connectdatabase();
        let update = await user.update().set()
    }
    async deleteticket() {

    }
    
    // getSchema() {
    //     this.myDb = this.session.getSchema('test');
    // }

    // beginTransaction() {
    //     if (this.session) {
    //         // Start a transaction
    //         this.session.startTransaction();
    //     }
    // }

    // commitTransaction() {
    //     if (this.session) {
    //         // Start a transaction
    //         this.session.commit();
    //     }
    // }

    // rollBackTransaction() {
    //     if (this.session) {
    //         // Start a transaction
    //         this.session.rollback();
    //     }
    // }

    // close() {
    //     if (this.session) {
    //         session.close();
    //     }
        
    // }
    // hello(){
    //     return 'hjgasdjhgas';
    // }
}
