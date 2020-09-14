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
        mydb = await db.getSchema('mydb').getTable('tickets');
        return mydb;
    }

    async selectticket() {
        await this.connectdatabase();
        let sql ='SELECT tickets.id,airline.alName,seat.sName,airport.name,a.name,tickets.date,tickets.number_seat,tickets.price,tickets.reg_date FROM tickets LEFT JOIN airport ON tickets.`start` = airport.id LEFT JOIN airport as a ON tickets.`end` = a.id LEFT JOIN airline ON tickets.airline_id = airline.alID LEFT JOIN category ON airline.alID = category.alID LEFT JOIN seat ON category.sID = seat.sID WHERE tickets.seat_id = seat.sID';
        await db.sql('use mydb').execute();
        var result = await db.sql(sql).execute();
        // if (result.fetchAll().length === 0) {
        //     throw "RECORD NOT FOUND";
        // }
        return result.fetchAll();
    }

    async findticket(id) {
        if(!validator.isInt(id)){
            throw "id khong hop le";
        }
        await this.connectdatabase();
        let sql ='SELECT tickets.id,airline.alName,seat.sName,airport.name,a.name,tickets.date,tickets.number_seat,tickets.price,tickets.reg_date FROM tickets LEFT JOIN airport ON tickets.`start` = airport.id LEFT JOIN airport as a ON tickets.`end` = a.id LEFT JOIN airline ON tickets.airline_id = airline.alID LEFT JOIN category ON airline.alID = category.alID LEFT JOIN seat ON category.sID = seat.sID WHERE tickets.seat_id = seat.sID AND tickets.id = ?';
        await db.sql('use mydb').execute();
        var result = await db.sql(sql).bind(id).execute();
        // if (result.fetchAll().length === 0) {
        //     throw "RECORD NOT FOUND";
        // }
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

    async insertticket(airline_id, seat_id, start, end, date, number_seat, price) {
        await this.connectdatabase();
        let tickets = await this.getSchema();
        if (!airline_id || airline_id.trim() === "") {
            throw "airline_id NOT NULL";
        }
        if (!seat_id || seat_id.trim() === "") {
            throw "seat_id NOT NULL";
        }
        if (!start || start.trim() === "") {
            throw "start NOT NULL";
        }
        if (!end || end.trim() === "") {
            throw "end NOT NULL";
        }
        if (!date || date.trim() === "") {
            throw "date NOT NULL";
        }
        if (!number_seat || number_seat.trim() === "") {
            throw "number_seat NOT NULL";
        }
        if (!price || price.trim() === "") {
            throw "PRICE NOT NULL";
        }
        if (isNaN(airline_id)) {
            throw "id_airline NOT NUMBER";
        }
        if (isNaN(seat_id)) {
            throw "id_seat NOT NUMBER";
        }
        if (isNaN(start)) {
            throw "id_seat NOT NUMBER";
        }
        if (isNaN(end)) {
            throw "id_seat NOT NUMBER";
        }
        if (isNaN(number_seat)) {
            throw "number_seat NOT NUMBER";
        }
        if (isNaN(price)) {
            throw "PRICE NOT NUMBER";
        }
      
        let insert = await tickets
                    .insert('airline_id', 'seat_id', 'start', 'end', 'date', 'number_seat', 'price')
                    .values(airline_id, seat_id, start, end, date, number_seat, price)
                    .execute();
    }

    async updateticket(id,airline_id, seat_id, start, end, date, number_seat, price) {
        await this.connectdatabase();
        let tickets = await this.getSchema();
        if (!airline_id || airline_id.trim() === "") {
            throw "airline_id NOT NULL";
        }
        if (!seat_id || seat_id.trim() === "") {
            throw "seat_id NOT NULL";
        }
        if (!start || start.trim() === "") {
            throw "start NOT NULL";
        }
        if (!end || end.trim() === "") {
            throw "end NOT NULL";
        }
        if (!date || date.trim() === "") {
            throw "date NOT NULL";
        }
        if (!number_seat || number_seat.trim() === "") {
            throw "number_seat NOT NULL";
        }
        if (!price || price.trim() === "") {
            throw "PRICE NOT NULL";
        }
        if (isNaN(airline_id)) {
            throw "id_airline NOT NUMBER";
        }
        if (isNaN(seat_id)) {
            throw "id_seat NOT NUMBER";
        }
        if (isNaN(start)) {
            throw "id_seat NOT NUMBER";
        }
        if (isNaN(end)) {
            throw "id_seat NOT NUMBER";
        }
        if (isNaN(number_seat)) {
            throw "number_seat NOT NUMBER";
        }
        if (isNaN(price)) {
            throw "PRICE NOT NUMBER";
        }

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
        console.log(deleteOderTicket);
    }

    async deleteticket(id) {
        await this.connectdatabase();
        let tickets = await this.getSchema();
        let deleteticket = await tickets.delete()
                            .where('id = :param')
                            .bind('param',id)
                            .execute();
        console.log(deleteticket);
    }

    // airport
    async selectairport() {
        await this.connectdatabase();
        let airport = await db.getSchema('mydb').getTable('airport');
        let selectairport =   await airport.select().execute()
        console.log(selectairport);
        // await this.close();
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
        // await this.close();
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
        // await this.close();
    }

    async deleteairport(id) {
        console.log(id);
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
