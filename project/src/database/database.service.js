import { Injectable } from '@nestjs/common';
import mysqlx from '@mysql/xdevapi';

@Injectable()
export class DatabaseService {
    connectDB(){
        var myTable;
        mysqlx
        .getSession({
            user: 'root',
            password: '123456',
            host: 'localhost',
            port: 33060
        })
        .then(function (session) {
            // Accessing an existing table
            myTable = session.getSchema('mydb').getTable('users');
            // Insert SQL Table data
            // return myTable
            // .insert(['id', 'name'])
            // .values([4, '2000-5-27'])
            // .execute()
        })
        .then(function () {
            // Find a row in the SQL Table
            return myTable
                .select()
                .execute(function (row) {
                    console.log(row);
                });
        })
        .then(function (myResult) {
            console.log(myResult);
        });
    }
}
