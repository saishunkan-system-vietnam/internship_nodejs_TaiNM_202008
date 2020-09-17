import { Injectable } from '@nestjs/common';
import  mysqlx  from '@mysql/xdevapi';
import validator from 'validator';
var db;
var mydb;

@Injectable()
export class TicketService {

    async connectdatabase() {
        db = await mysqlx.getSession({
            user: 'root',
            password: '123456',
            host: 'localhost',
            port: 33060
        });
        return db;
    }

    async getSchema() {
        await this.connectdatabase();
        mydb = await db.getSchema('mydb').getTable('tickets');
        return mydb;
    }

    async selectticket(airline, seat, start, end, date, price) {
        // console.log(airline);
        await this.connectdatabase();
        let sql =
      'SELECT tickets.id,airline.alName as airline,seat.sName as seat,airport.name as start,a.name as end,tickets.date,tickets.number_seat,tickets.price,tickets.reg_date FROM tickets LEFT JOIN airport ON tickets.`start` = airport.id LEFT JOIN airport as a ON tickets.`end` = a.id LEFT JOIN airline ON tickets.airline_id = airline.alID LEFT JOIN category ON airline.alID = category.alID LEFT JOIN seat ON category.sID = seat.sID WHERE tickets.seat_id = seat.sID AND airline.alName like ? AND seat.sName like ? AND airport.name like ? AND a.name like ? AND tickets.date like ? AND tickets.price like ?';
        await db.sql('use mydb;').execute();
        var result = await db
        .sql(sql)
        .bind(
            '%' + airline + '%',
            '%' + seat + '%',
            '%' + start + '%',
            '%' + end + '%',
            '%' + date + '%',
            '%' + price + '%',
        )
        .execute();
        // await this.close();
        // console.log(result.fetchAll());
        return result.fetchAll();
    }

    async findticket(id) {
        await this.connectdatabase();
        let sql ='SELECT tickets.id,airline.alName,seat.sName,airport.name,a.name,tickets.date,tickets.number_seat,tickets.price,tickets.airline_id,tickets.seat_id,tickets.`start`,tickets.`end`,tickets.reg_date FROM tickets LEFT JOIN airport ON tickets.`start` = airport.id LEFT JOIN airport as a ON tickets.`end` = a.id LEFT JOIN airline ON tickets.airline_id = airline.alID LEFT JOIN category ON airline.alID = category.alID LEFT JOIN seat ON category.sID = seat.sID WHERE tickets.seat_id = seat.sID AND tickets.id = ?;';
        await db.sql('use mydb;').execute();
        var result = await db.sql(sql).bind(id).execute();
        return result.fetchAll();
        
    }

    async insertticket(airline_id, seat_id, start, end, date, number_seat, price) {
        await this.connectdatabase();
        let tickets = await this.getSchema();
        let insert = await tickets
                    .insert('airline_id', 'seat_id', 'start', 'end', 'date', 'number_seat', 'price')
                    .values(airline_id, seat_id, start, end, date, number_seat, price)
                    .execute();
    }

    async updateticket(id,airline_id, seat_id, start, end, date, number_seat, price) {
        await this.connectdatabase();
        let tickets = await this.getSchema();
        let updateticket = await tickets
                            .update()
                            .where('id = :param')
                            .bind('param',id)
                            .set('airline_id',airline_id)
                            .set('seat_id',seat_id)
                            .set('start',start)
                            .set('end',end)
                            .set('date',date)
                            .set('number_seat',number_seat)
                            .set('price',price)
                            .execute();
    }

    async deleteOderTicket(id) {
        let db = await this.connectdatabase();
        let order_ticket = await db.getSchema('mydb').getTable('order_ticket');
        // let order_ticket = await this.getSchema();
        let deleteOderTicket = await order_ticket.delete()
                            .where('ticket_id = :param')
                            .bind('param',id)
                            .execute();
        // console.log(deleteOderTicket);
    }

    async deleteticket(id) {
        await this.connectdatabase();
        let tickets = await this.getSchema();
        let deleteticket = await tickets.delete()
                            .where('id = :param')
                            .bind('param',id)
                            .execute();
        // console.log(deleteticket);
    }

    // airport
    async selectairport() {
        await this.connectdatabase();
        let airport = await db.getSchema('mydb').getTable('airport');
        let selectairport =   await airport.select().execute()
        // console.log(selectairport);
        // await this.close();
        return selectairport.fetchAll();
    }

    async insertairport(name) {
        await this.connectdatabase();
        let airport = await db.getSchema('mydb').getTable('airport');
        let insert = await airport
                    .insert('name')
                    .values(name)
                    .execute();
        // await this.close();
    }

    async updateairport(id,name) {
        await this.connectdatabase();
        let airport = await db.getSchema('mydb').getTable('airport');
        let updateairport = await airport
                            .update()
                            .where('id = :param')
                            .bind('param',id)
                            .set('name',name)
                            .execute();
        // await this.close();
    }

    async deleteairport(id) {
        // console.log(id);
        await this.connectdatabase();
        let airport = await db.getSchema('mydb').getTable('airport');
        let deleteairport = await airport.delete()
                            .where('id = :param')
                            .bind('param',id)
                            .execute();
        // await this.close();
        // console.log(deleteairport);
    }

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

}