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
        return session.close();
    }

    async getSchema(){
        await this.connectDB();
        myTable = await session.getSchema('mydb').getTable('orders');
        return myTable; 
    }

    async insert(userId,total){
        await this.connectDB();
        await session.sql('USE mydb;').execute();
        await session.sql('INSERT INTO orders(user_id,total) VALUES(?,?)').bind(userId,total).execute();
        let order_id = await session.sql('SELECT last_insert_id()').execute();
        this.closeDB();
        return order_id;
    }

    async insertOrder(order_id, ticket_id, quantity, airline, seat, start, end, date, price){
        await this.connectDB();
        await session.sql('USE mydb;').execute();
        try {
            await session.sql('START TRANSACTION;').execute();
            await session.sql('insert into order_ticket(order_id, ticket_id, quantity, airline, seat, start, end, date, price) values(?,?,?,?,?,?,?,?,?)').bind(order_id,ticket_id,quantity, airline, seat, start, end, date, price).execute();
            await session.sql('COMMIT;').execute();
        } catch (error) {
            await session.sql('ROLLBACK;').execute();
            this.closeDB
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
            this.closeDB();
        } catch (error) {
            console.log(error);
            await session.sql('ROLLBACK;').execute();
            this.closeDB();
        }
    }

    async findAll(){
        await this.connectDB();
        // session.startTransaction();
        try {
            await session.sql('USE mydb;').execute();
            let result = await session.sql('SELECT * FROM orders JOIN users ON orders.user_id = users.id').execute();
            // session.commit();
            this.closeDB();
            return result.fetchAll(); 
        } catch (error) {
            console.log(error);
            // session.rollback();
            this.closeDB();
        }
    }

    async findOrderByUsers(user_id){
        await this.connectDB();
        try {
            await session.sql('USE mydb;').execute();
            let result = await session.sql('SELECT id, total, status, quantity, airline, seat, start, end, date, price FROM orders JOIN order_ticket ON orders.id = order_ticket.order_id where orders.user_id = ?;').bind(user_id).execute();
            this.closeDB();
            return result.fetchAll();
        } catch (error) {
            console.log(error);
            this.closeDB();
        }
    }

    async findById(id){
        await this.getSchema();
        let result = await myTable.select()
        .where('user_id = :param')
        .bind('param',id)
        .execute();
        this.closeDB();
        return result.fetchAll();
    }

    async checkSession(){
        await this.connectDB();
    }

    async updateStatus(id, status){
        await this.connectDB();
        await this.getSchema();
        await myTable.update()
          .set('status',status)
          .where('id = :param')
          .bind('param',id)
          .execute();
        this.closeDB();
    }


    async insertOrders(user_id,ticket_id,airline, seat, start, end, price, quantity, date){
        await this.connectDB();
        await this.getSchema();
        await myTable.insert(['user_id','ticket_id','airline','seat','start','end','price','quantity','date'])
        .values([user_id,ticket_id,airline,seat,start,end,price,quantity,date])
        .execute();
        this.closeDB();
    }

    async updateQuantity(ticket_id){
        await this.connectDB();
        await session.sql('USE mydb;').execute();
        let number = await session.sql('SELECT number_seat FROM tickets WHERE id = ?').bind(ticket_id).execute();
        let update = number.fetchAll();
        // console.log(update[0][0]);
        let quantity = update[0][0]-1;
        await session.sql('UPDATE tickets SET number_seat = ? WHERE id = ?').bind(quantity,ticket_id).execute();
        this.closeDB();
    }

}
