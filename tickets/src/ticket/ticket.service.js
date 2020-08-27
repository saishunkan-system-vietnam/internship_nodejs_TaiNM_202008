import { Injectable } from '@nestjs/common';
import  mysqlx  from '@mysql/xdevapi';
import validator from 'validator';
var db;
var mydb;

@Injectable()
export class TicketService {

    async connectdatabase() {
        db = await mysqlx.getSession({
            host: '192.168.10.137',
            port: 33060,        
            user: 'chungpv', 
            password: '1', });
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
        let sql ='SELECT tickets.id,tickets.`name`,tickets.flight_time,airline.alName,typeofseat.sName,tickets.number_seat,tickets.price FROM tickets LEFT JOIN airline ON tickets.id_airline = airline.alID LEFT JOIN typeofseat ON tickets.id_seat = typeofseat.sID';
        await db.sql('use mydb').execute();
        var result = await db.sql(sql).execute();
        return result.fetchAll();
    }

    async findticket(id) {
        if(!validator.isInt(id)){
            throw "id khong hop le";
        }
        await this.connectdatabase();
        let sql ='SELECT tickets.id,tickets.`name`,tickets.flight_time,airline.alName,typeofseat.sName,tickets.number_seat,tickets.price FROM tickets LEFT JOIN airline ON tickets.id_airline = airline.alID LEFT JOIN typeofseat ON tickets.id_seat = typeofseat.sID WHERE tickets.id = ?';
        await db.sql('use mydb').execute();
        var result = await db.sql(sql).bind(id).execute();
        return result.fetchAll();
        
        // await this.connectdatabase();
        // let tickets = await this.getSchema();
        // let select =   await tickets.select()
        //             .where('id = :param')
        //             .bind('param',id)
        //             .execute()
        // console.log(select);
        // return select.fetchAll();
    }

    async insertticket(name,flight_time,id_airline, id_seat,number_seat,price) {
        await this.connectdatabase();
        let tickets = await this.getSchema();
        if (!name || name.trim() === "") {
            throw "loi name";
        }
        let insert = await tickets
                    .insert('name','flight_time','id_airline', 'id_seat','number_seat','price')
                    .values(name,flight_time,id_airline, id_seat,number_seat,price)
                    .execute();
    }

    async updateticket(id,name,flight_time,id_airline, id_seat,number_seat,price) {
        await this.connectdatabase();
        let tickets = await this.getSchema();
        let updateticket = await tickets
                            .update()
                            .set('name',name)
                            .set('flight_time',flight_time)
                            .set('id_airline',id_airline)
                            .set('id_seat',id_seat)
                            .set('number_seat',number_seat)
                            .set('price',price)
                            .where('id = :param')
                            .bind('param',id)
                            .execute();
        //console.log(updateticket);
    }

    async deleteticket(id) {
        //return "hello";
        await this.connectdatabase();
        let tickets = await this.getSchema();
        let deleteticket = await tickets.delete()
                            .where('id = :param')
                            .bind('param',id)
                            .execute();
        console.log(deleteticket);
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
