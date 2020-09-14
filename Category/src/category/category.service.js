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

    closeSession() {
        return session.close();
    }

    async getTable(tableName) {
        await this.connectDB();
        myTable = await session.getSchema('mydb').getTable(tableName);
        return myTable;
    }

    async insertAirline(alCode, alName) {
        myTable = await this.getTable('airline');
        myTable.insert(['alCode', 'alName'])
            .values(alCode, alName)
            .execute();
        this.closeSession();
    }

    async updateAirline(id, alCode, alName) {
        myTable = await this.getTable('airline');
        myTable.update()
            .set('alCode', alCode)
            .set('alName', alName)
            .where('alID = :param')
            .bind('param', id)
            .execute();
        this.closeSession();
    }

    async deleteAirline(alID) {
            await this.deleteCategoryByAl(alID);
            myTable = await this.getTable('airline');
            myTable.delete()
            .where('alID = :param')
            .bind('param', alID)
            .execute();
       this.closeSession();
    }

    async findAllAirline() {
        // await this.connectDB();
        // await session.sql('USE category;').execute();
        // var result = await session.sql('select sName from typeOfSeat, airline where airline.alID = typeOfSeat.alID;').execute();
        // return result.fetchAll();
        myTable = await this.getTable('airline');
        var result = await myTable.select().execute();
        this.closeSession();
        return result.fetchAll();
    }

    async findAirlineById(id) {
        myTable = await this.getTable('airline');
        var result = await myTable.select()
            .where('alID = :param')
            .bind('param', id)
            .execute();
        this.closeSession();
        return result.fetchAll();
    }

    async insertSeat(sName) {
        myTable = await this.getTable('seat');
        myTable.insert(['sName'])
            .values(sName)
            .execute();
        this.closeSession();
    }

    async updateSeat(sID, sName) {
        myTable = await this.getTable('seat');
        myTable.update()
            .set('sName', sName)
            .where('sID = :param')
            .bind('param', sID)
            .execute();
        this.closeSession();
    }

    async deleteSeat(sID) {
            await this.deleteCategoryBySeat(sID);
            myTable = await this.getTable('seat');
            myTable.delete()
            .where('sID = :param')
            .bind('param', sID)
            .execute();
       this.closeSession();
    }

    async findAllSeat() {
        myTable = await this.getTable('seat');
        var result = await myTable.select().execute();
        this.closeSession();
        return result.fetchAll();
    }

    async findSeatById(id) {
        myTable = await this.getTable('seat');
        var result = await myTable.select()
            .where('sID = :param')
            .bind('param', id)
            .execute();
        this.closeSession();
        return result.fetchAll();
    }

    async insertCategory(alID, sID) {
        myTable = await this.getTable('category');
        myTable.insert(['alID', 'sID'])
            .values(alID, sID)
            .execute();
        this.closeSession();
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
        this.closeSession();
    }

    async deleteCategoryBySeat(sID) {
        myTable = await this.getTable('category');
        myTable.delete()
            .where('sID = :param')
            .bind('param', sID)
            .execute();
        this.closeSession();
    }

    async deleteCategoryByAirlineAndSeat(alID, sID) {
        myTable = await this.getTable('category');
        myTable.delete()
            .where('alID = :param1 and sID =:param2')
            .bind('param1', alID)
            .bind('param2', sID)
            .execute();
        this.closeSession();
    }

    async findAllSeatByAirline() {
        await this.connectDB();
        await session.sql('USE mydb;').execute();
        var result = await session.sql('select airline.alID, airline.alCode, airline.alName, seat.sID, seat.sName from airline, seat, category where airline.alID=category.alID and seat.sID=category.sID;').execute();
        this.closeSession();
        return result.fetchAll();
    }

    async findSeatByAirline(alCode) {
        await this.connectDB();
        await session.sql('USE mydb;').execute();
        var result = await session.sql(`select airline.alName, seat.sName from airline, seat, category where airline.alID=category.alID and seat.sID=category.sID and category.alCode like '${alID}%';`).execute();
        this.closeSession();
        return result.fetchAll();
    }
}