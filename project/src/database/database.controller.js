import { Controller, Dependencies, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller()
@Dependencies(DatabaseService)
export class DatabaseController {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    
    @Get()
    getHello() {
        return this.databaseService.connectDB();
    }
}
