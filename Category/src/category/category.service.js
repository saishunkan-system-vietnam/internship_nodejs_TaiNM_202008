import { Injectable } from '@nestjs/common';
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

    async closeSession() {
        session.close();
    }

    async getTable(tableName) {
        await this.connectDB();
        myTable = await session.getSchema('category').getTable(tableName);
        return myTable;
    }

    async insertAirline(alCode, alName) {
        myTable = await this.getTable('airline');
        myTable.insert(['alCode', 'alName'])
            .values(alCode, alName)
            .execute();
    }

    async updateAirline(id, alCode, alName) {
        myTable = await this.getTable('airline');
        myTable.update()
            .set('alCode', alCode)
            .set('alName', alName)
            .where('alID = :param')
            .bind('param', id)
            .execute();
    }

    async deleteAirline(alID) {
        await this.deleteCategoryByAl(alID);
        myTable = await this.getTable('airline');
        myTable.delete()
            .where('alID = :param')
            .bind('param', alID)
            .execute();
    }

    async findAllAirline() {
        // await this.connectDB();
        // await session.sql('USE category;').execute();
        // var result = await session.sql('select sName from typeOfSeat, airline where airline.alID = typeOfSeat.alID;').execute();
        // return result.fetchAll();
        myTable = await this.getTable('airline');
        var result = await myTable.select().execute();
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

    async insertSeat(sName) {
        myTable = await this.getTable('seat');
        myTable.insert(['sName'])
            .values(sName)
            .execute();
    }

    async updateSeat(sID, sName) {
        myTable = await this.getTable('seat');
        myTable.update()
            .set('sName', sName)
            .where('sID = :param')
            .bind('param', sID)
            .execute();
    }

    async deleteSeat(sID) {
        await this.deleteCategoryBySeat(sID);
        myTable = await this.getTable('seat');
        myTable.delete()
            .where('sID = :param')
            .bind('param', sID)
            .execute();
    }

    async findAllSeat() {
        myTable = await this.getTable('seat');
        var result = await myTable.select().execute();
        return result.fetchAll();
    }

    async findSeatById(id) {
        myTable = await this.getTable('seat');
        var result = await myTable.select()
            .where('alID = :param')
            .bind('param', id)
            .execute();
        return result.fetchOne();
    }

    async insertCategory(alID, sID) {
        myTable = await this.getTable('category');
        myTable.insert(['alID', 'sID'])
            .values(alID, sID)
            .execute();
    }


    // Khi insert/update airline sẽ chọn loại ghế cho airline rồi gọi làm insert vào category, không cần thiết phải update category
    // async updateCategory(alID, sID) {
    //     myTable = await this.getTable('category');
    //     myTable.update()
    //         .set('alCode', alCode)
    //         .set('alName', alName)
    //         .where('alID = :param')
    //         .bind('param', id)
    //         .execute();
    // }

    async deleteCategoryByAl(alID) {
        myTable = await this.getTable('category');
        myTable.delete()
            .where('alID = :param')
            .bind('param', alID)
            .execute();
    }

    async deleteCategoryBySeat(sID) {
        myTable = await this.getTable('category');
        myTable.delete()
            .where('sID = :param')
            .bind('param', sID)
            .execute();
    }

    async findAllSeatByAirline() {
        await this.connectDB();
        await session.sql('USE category;').execute();
        var result = await session.sql('select airline.alCode, seat.sName from airline, seat, category where airline.alID=category.alID and seat.sID=category.sID;').execute();
        return result.fetchAll();
    }

    async findSeatByAirlineById(alID) {
        await this.connectDB();
        await session.sql('USE category;').execute();
        var result = await session.sql(`select airline.alCode, seat.sName from airline, seat, category where airline.alID=category.alID and seat.sID=category.sID and category.alID=${alID};`).execute();
        return result.fetchAll();
    }

}