import { Injectable } from '@nestjs/common';
import  mysqlx  from '@mysql/xdevapi';
import validator from 'validator';
var db;
var mydb;


@Injectable()
export class AirportService {

    async connectdatabase() {
        db = await mysqlx.getSession({
            host: '192.168.10.137',
            port: 33060,        
            user: 'chungpv', 
            password: '1', });
        return db;
    }
    // hello() {
    //     return "123";
    // }

    //airport
    async selectairport() {
        await this.connectdatabase();
        let airport = await db.getSchema('mydb').getTable('airport');
        let selectairport =   await airport.select().execute()
        console.log(selectairport);
        return selectairport.fetchAll();
    }
    async insertairport(name) {
        await this.connectdatabase();
        let airport = await db.getSchema('mydb').getTable('airport');
        if (!name || name.trim() === "") {
            throw "name NOT NULL";
        }
        let insert = await airport
                    .insert('name')
                    .values(name)
                    .execute();
    }
    async updateairport(id,name) {
        await this.connectdatabase();
        let airport = await db.getSchema('mydb').getTable('airport');
        if (!name || name.trim() === "") {
            throw "name NOT NULL";
        }
        let updateairport = await airport
                            .update()
                            .where('id = :param')
                            .bind('param',id)
                            .set('name',name)
                            .execute();
    }
    async deleteairport(id) {
        await this.connectdatabase();
        let airport = await db.getSchema('mydb').getTable('airport');
        let deleteticket = await airport.delete()
                            .where('id = :param')
                            .bind('param',id)
                            .execute();
        console.log(deleteticket);
    }

}
