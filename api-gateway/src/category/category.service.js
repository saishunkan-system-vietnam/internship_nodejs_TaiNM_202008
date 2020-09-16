import { Injectable, Dependencies } from '@nestjs/common';


@Injectable()
@Dependencies('Category')
export class CategoryService {
    constructor(categoryClient) {
        this.categoryClient = categoryClient
    }

    onModuleInit() {
        console.log('onModuleInit');
    }

    async onApplicationBootstrap() {
        console.log('onApplicationBootstrap');
        await this.categoryClient.connect();
    }


    async insertAirline(data) {
        return this.categoryClient.send('insertAirline', data);
    }

    async updateAirline(data) {
        return this.categoryClient.send('updateAirline', data);
    }

    async findAllAirline() {
        let data = {};
        return this.categoryClient.send('findAllAirline', data);
    }

    async findAirlineById(data) {
        return this.categoryClient.send('findAirlineById', data);
    }

    async deleteAirline(data) {
        return this.categoryClient.send('deleteAirline', data);
    }

    async findAllSeat() {
        let data = {}
        return this.categoryClient.send('findAllSeat', data)
    }

    async findSeatById(data) {
        return this.categoryClient.send('findSeatById', data)
    }

    async deleteSeat(data) {
        return this.categoryClient.send('deleteSeat', data)
    }

    async insertSeat(data) {
        return this.categoryClient.send('insertSeat', data)
    }

    async updateSeat(data) {
        return this.categoryClient.send('updateSeat', data)
    }

    async insertCategory(data) {
        return this.categoryClient.send('insertCategory', data)
    }

    async findAllSeatByAirline() {
        let data = {};
        return this.categoryClient.send('findAllSeatByAirline', data)
    }

    async deleteCategory(data) {
        return this.categoryClient.send('deleteCategoryByAlnSeat', data)
    }

    async findSeatByAirline(data) {
        return this.categoryClient.send('findSeatByAirline', data)
    }
}