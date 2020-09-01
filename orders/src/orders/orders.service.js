import { Injectable } from '@nestjs/common';
import mysqlx from '@mysql/xdevapi';
import validator from 'validator';

var myTable;
var session;
@Injectable()
export class OrdersService {
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
        await this.connectDB();
        myTable = await session.getSchema('mydb').getTable('orders');
        return myTable; 
    }

    async insert(userId, total){
        await this.connectDB();
        await session.sql('USE mydb;').execute();
        await session.sql('INSERT INTO orders(user_id,total,status) VALUES(?,?,1)').bind(userId,total).execute();
        let order_id = await session.sql('SELECT last_insert_id()').execute();
        return order_id;
    }

    async insertOrder(order_id, ticket_id, quantity, length){
        await this.connectDB();
        await session.sql('USE mydb;').execute();
        try {
            await session.sql('START TRANSACTION;').execute();
            await session.sql('insert into order_ticket(order_id, ticket_id, quantity) values(?,?,?)').bind(order_id,ticket_id,quantity).execute();
            await session.sql('COMMIT;').execute();
        } catch (error) {
            await session.sql('ROLLBACK;').execute();
            console.log(error);
        }
    }


    async delete(order_id){
        await this.connectDB();
        await session.sql('USE mydb;').execute();
        try {
            await session.sql('START TRANSACTION;').execute();
            await session.sql('DELETE FROM order_ticket WHERE order_id = ?;').bind(order_id).execute();
            await session.sql('DELETE FROM orders WHERE id = ?;').bind(order_id).execute();
            await session.sql('COMMIT;').execute();
        } catch (error) {
            console.log(error);
            await session.sql('ROLLBACK;').execute();
        }
    }

    async findAll(user_id){
        await this.connectDB();
        session.startTransaction();
        try {
            await session.sql('USE mydb;').execute();
            await session.sql('SELECT * FROM orders JOIN order_ticket ON orders.id = order_ticket.order_id JOIN tickets ON order_ticket.ticket_id = tickets.id WHERE orders.user_id = ?;').bind(user_id).execute();
            session.commit();
        } catch (error) {
            console.log(error);
            session.rollback();
        }
    }

    async findById(id){
        await this.getSchema();
        let result = await myTable.select()
        .where('id = :param')
        .bind('param',id)
        .execute();
        return result.fetchAll();
    }

    async checkSession(){
        await this.connectDB();
    }

}
