import { Injectable, Dependencies } from '@nestjs/common';
import mysqlx from '@mysql/xdevapi';
var myTable, session;
@Injectable()
export class CategoryService {
    async connectDB() {
        session = await mysqlx
            .getSession({
                user: 'root',
                password: '123456',
                host: 'localhost',
                port: 33060
            })
        return session;
    }

    async getTable(tableName) {
        await this.connectDB();
        myTable = await session.getSchema('category').getTable(tableName);
        return myTable;
    }

    async insertAirline(alCode, alName, alNation) {
        myTable = await this.getTable('airline');
        myTable.insert(['alCode', 'alName', 'alNation'])
            .values([alCode, alName, alNation])
            .execute();
    }

    async updateAirline(id, alCode, alName, alNation) {
        myTable = await this.getTable('airline');
        myTable.update()
            .set('alCode', alCode)
            .set('alName', alName)
            .set('alNation', alNation)
            .where('alID = :param')
            .bind('param', id)
            .execute();
    }

    async deleteAirline(id) {
        myTable = await this.getTable('airline');
        myTable.delete()
            .where('alID = :param')
            .bind('param', id)
            .execute();
    }

    async findAllAirline() {
        await this.connectDB();
        await session.sql('USE category;').execute();
        var result = await session.sql('select sName from typeOfSeat, airline where airline.alID = typeOfSeat.alID;').execute();
        return result.fetchAll();
    }

    async findAirlineById(id) {
        myTable = await this.getTable('airline');
        var result = await myTable.select()
            .where('alID = :param')
            .bind('param', id)
            .execute();
        return result.fetchOne();
    }

    async insertTypeOfSeat(sID, alID, sName) {
        myTable = await this.getTable('typeOfSeat');
        myTable.insert(['sID', 'alID', 'sName'])
            .values([sID, alID, sName])
            .execute();
    }

    async updateTypeOfSeat(sID, alID, sName) {
        myTable = await this.getTable('typeOfSeat');
        myTable.update()
            .set(['sID', sID], ['alID', alID], ['sName', sname])
            .where('sID = :param')
            .bind('param', sID)
            .execute();
    }

    async deleteTypeOfSeat(sID) {
        myTable = await this.getTable('typeOfSeat');
        myTable.delete()
            .where('sID = :param')
            .bind('param', sID)
            .execute();
    }

    async findAllTypeOfSeat() {
        myTable = await this.getTable('typeOfSeat');
        var result = await myTable.select().execute();
        return result.fetchAll();
    }

    async findTypeOfSeatById(id) {
        myTable = await this.getTable('typeOfSeat');
        await myTable.select()
            .where('alID = :param')
            .bind('param', id)
            .execute(function (row) {
                return row;
            });
    }
}