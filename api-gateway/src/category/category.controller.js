import {
    Controller,
    Dependencies,
    Post,
    Req,
    Bind,
    Put,
    Param,
    Get,
    Delete
} from '@nestjs/common'
import {
    CategoryService
} from './category.service'

@Controller('category')
@Dependencies(CategoryService)
export class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService
    }

    @Get('findAllAirline')
    async findAllAirline() {
        return this.categoryService.findAllAirline()
    }

    @Get('findAirlineById/:id')
    @Bind(Param())
    async findAirlineById(params) {
        // console.log(params.id)
        return this.categoryService.findAirlineById(params.id)
    }

    @Post('insertAirline')
    @Bind(Req())
    async insertAirline(req) {
        console.log(req.body);
        return this.categoryService.insertAirline(req.body)
    }

    @Put('updateAirline/:alID')
    @Bind(Req())
    async updateAirline(req) {
        // console.log(req.body.data)
        // var data = {
        //     "alID": params.alID,
        //     'alCode': req.body.alCode,
        //     'alName': req.body.alName
        // }
        return this.categoryService.updateAirline(req.body.data)
    }

    @Delete('deleteAirline/:id')
    @Bind(Param())
    async deleteAirline(params) {
        return this.categoryService.deleteAirline(params.id)
    }

    @Get('findAllSeat')
    async findAllSeat() {
        return this.categoryService.findAllSeat()
    }

    @Get('findSeatById/:id')
    @Bind(Param())
    async findSeatById(params) {
        return this.categoryService.findSeatById(params.id)
    }

    @Delete('deleteSeat/:id')
    @Bind(Param())
    async deleteSeat(params) {
        return this.categoryService.deleteSeat(params.id)
    }

    @Post('insertSeat')
    @Bind(Req())
    async insertSeat(req) {
        console.log(req.body);
        return this.categoryService.insertSeat(req.body)
    }

    @Put('updateSeat/:sID')
    @Bind(Req())
    async updateSeat(req) {
        console.log(req.body.data)
        return this.categoryService.updateSeat(req.body.data)
    }

    @Post('insertCategory')
    @Bind(Req())
    async insertCategory(req) {
        console.log(req.body)
        return this.categoryService.insertCategory(req.body)
    }

    @Get('findAllSeatByAirline')
    async findAllSeatByAirline() {
        return this.categoryService.findAllSeatByAirline()
    }

    @Delete('deleteCategory/:alID/:sID')
    @Bind(Param())
    async deleteCategory(params) {
        console.log(params)
        return this.categoryService.deleteCategory(params)
    }

    @Get('findSeatByAirline/:alID')
    @Bind(Param())
    async findSeatByAirline(params) {
        return this.categoryService.findSeatByAirline(params.alID)
    }
}