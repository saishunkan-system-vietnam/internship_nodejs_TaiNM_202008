import { Injectable } from '@nestjs/common';
import mysqlx from '@mysql/xdevapi';
let mydb;

@Injectable()
export class connect {
  constructor() {
    const databse = {
      host: '127.0.0.1',
      port: 33060,
      user: 'root',
      password: '123456',
    };
    // const schema = 'test';
    mydb = mysqlx.getSession(databse).then(function(session) {
      return session;
    });
    return mydb;
    // return a[0] = b;
    // c = mysqlx.getSession(databse).then(function(session) {
    //   mydb = session.getSchema(schema);
    //   return mydb;
    // });
    // return c;
  }
}
