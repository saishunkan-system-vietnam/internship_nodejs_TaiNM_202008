import { Injectable, Dependencies } from '@nestjs/common';
import validator from 'validator';
import { connect } from '../connectdb';
let myTable;

@Injectable()
@Dependencies(connect)
export class AppService {
  constructor(connect) {
    this.connect = connect;
  }

  getHello() {
    return 'Hello World alo ticket!';
  }

  async getSchema() {
    myTable = await this.connect.getSchema('test').getTable('tickets');
    return myTable;
  }
  close() {
    if (this.connect) {
      this.connect.close();
    }
  }

  async test() {
    let tickets = await this.getSchema();
    // let myTable = await this.connect.getSchema('test').getTable('tickets');
    let select = await tickets.select().execute();
    return select.fetchAll();
  }

  async selectticket() {
    let db = this.connect;
    let sql =
      'SELECT tickets.id,airline.alName,seat.sName,airport.name,a.name,tickets.date,tickets.number_seat,tickets.price,tickets.reg_date FROM tickets LEFT JOIN airport ON tickets.`start` = airport.id LEFT JOIN airport as a ON tickets.`end` = a.id LEFT JOIN airline ON tickets.airline_id = airline.alID LEFT JOIN category ON airline.alID = category.alID LEFT JOIN seat ON category.sID = seat.sID WHERE tickets.seat_id = seat.sID';
    let x = await db.sql('use test').execute();
    var result = await db.sql(sql).execute();
    // await this.close();
    return result.fetchAll();
  }

  async findticket(id) {
    if (!validator.isInt(id)) {
      throw 'id khong hop le';
    }
    let db = this.connect;
    let sql =
      'SELECT tickets.id,airline.alName,seat.sName,airport.name,a.name,tickets.date,tickets.number_seat,tickets.price,tickets.reg_date FROM tickets LEFT JOIN airport ON tickets.`start` = airport.id LEFT JOIN airport as a ON tickets.`end` = a.id LEFT JOIN airline ON tickets.airline_id = airline.alID LEFT JOIN category ON airline.alID = category.alID LEFT JOIN seat ON category.sID = seat.sID WHERE tickets.seat_id = seat.sID AND tickets.id = ?';
    await db.sql('use test').execute();
    var result = await db
      .sql(sql)
      .bind(id)
      .execute();
    // await this.close();
    return result.fetchAll();
  }

  async insertticket(
    airline_id,
    seat_id,
    start,
    end,
    date,
    number_seat,
    price,
  ) {
    let tickets = await this.getSchema();
    if (!airline_id || airline_id.trim() === '') {
      throw 'airline_id NOT NULL';
    }
    if (!seat_id || seat_id.trim() === '') {
      throw 'seat_id NOT NULL';
    }
    if (!start || start.trim() === '') {
      throw 'start NOT NULL';
    }
    if (!end || end.trim() === '') {
      throw 'end NOT NULL';
    }
    if (!date || date.trim() === '') {
      throw 'date NOT NULL';
    }
    if (!number_seat || number_seat.trim() === '') {
      throw 'number_seat NOT NULL';
    }
    if (!price || price.trim() === '') {
      throw 'PRICE NOT NULL';
    }
    if (isNaN(airline_id)) {
      throw 'id_airline NOT NUMBER';
    }
    if (isNaN(seat_id)) {
      throw 'id_seat NOT NUMBER';
    }
    if (isNaN(start)) {
      throw 'id_seat NOT NUMBER';
    }
    if (isNaN(end)) {
      throw 'id_seat NOT NUMBER';
    }
    if (isNaN(number_seat)) {
      throw 'number_seat NOT NUMBER';
    }
    if (isNaN(price)) {
      throw 'PRICE NOT NUMBER';
    }

    let insert = await tickets
      .insert(
        'airline_id',
        'seat_id',
        'start',
        'end',
        'date',
        'number_seat',
        'price',
      )
      .values(airline_id, seat_id, start, end, date, number_seat, price)
      .execute();
    // await this.close();
  }
  async updateticket(
    id,
    airline_id,
    seat_id,
    start,
    end,
    date,
    number_seat,
    price,
  ) {
    let tickets = await this.getSchema();
    if (!airline_id || airline_id.trim() === '') {
      throw 'airline_id NOT NULL';
    }
    if (!seat_id || seat_id.trim() === '') {
      throw 'seat_id NOT NULL';
    }
    if (!start || start.trim() === '') {
      throw 'start NOT NULL';
    }
    if (!end || end.trim() === '') {
      throw 'end NOT NULL';
    }
    if (!date || date.trim() === '') {
      throw 'date NOT NULL';
    }
    if (!number_seat || number_seat.trim() === '') {
      throw 'number_seat NOT NULL';
    }
    if (!price || price.trim() === '') {
      throw 'PRICE NOT NULL';
    }
    if (isNaN(airline_id)) {
      throw 'id_airline NOT NUMBER';
    }
    if (isNaN(seat_id)) {
      throw 'id_seat NOT NUMBER';
    }
    if (isNaN(start)) {
      throw 'id_seat NOT NUMBER';
    }
    if (isNaN(end)) {
      throw 'id_seat NOT NUMBER';
    }
    if (isNaN(number_seat)) {
      throw 'number_seat NOT NUMBER';
    }
    if (isNaN(price)) {
      throw 'PRICE NOT NUMBER';
    }

    let updateticket = await tickets
      .update()
      .where('id = :param')
      .bind('param', id)
      .set('airline_id', airline_id)
      .set('seat_id', seat_id)
      .set('start', start)
      .set('end', end)
      .set('date', date)
      .set('number_seat', number_seat)
      .set('price', price)
      .execute();
    // await this.close();
  }

  async deleteOderTicket(id) {
    let order_ticket = await this.connect
      .getSchema('test')
      .getTable('order_ticket');
    let deleteOderTicket = await order_ticket
      .delete()
      .where('ticket_id = :param')
      .bind('param', id)
      .execute();
    // await this.close();
    //console.log(deleteOderTicket);
  }

  async deleteticket(id) {
    let tickets = await this.getSchema();
    let deleteticket = await tickets
      .delete()
      .where('id = :param')
      .bind('param', id)
      .execute();
    // await this.close();
    console.log(deleteticket);
  }

  // airport
  async selectairport() {
    let airport = await this.connect.getSchema('test').getTable('airport');
    let selectairport = await airport.select().execute();
    console.log(selectairport);
    // await this.close();
    return selectairport.fetchAll();
  }
  async insertairport(name) {
    let airport = await this.connect.getSchema('test').getTable('airport');
    if (!name || name.trim() === '') {
      throw 'name NOT NULL';
    }
    let insert = await airport
      .insert('name')
      .values(name)
      .execute();
    // await this.close();
  }
  async updateairport(id, name) {
    let airport = await this.connect.getSchema('test').getTable('airport');
    if (!name || name.trim() === '') {
      throw 'name NOT NULL';
    }
    let updateairport = await airport
      .update()
      .where('id = :param')
      .bind('param', id)
      .set('name', name)
      .execute();
    // await this.close();
  }
  async deleteairport(id) {
    let airport = await this.connect.getSchema('test').getTable('airport');
    let deleteairport = await airport
      .delete()
      .where('id = :param')
      .bind('param', id)
      .execute();
    // await this.close();
    // console.log(deleteairport);
  }
}
