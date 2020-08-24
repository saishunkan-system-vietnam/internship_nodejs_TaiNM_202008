import { Controller, Dependencies, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';

@Controller()
@Dependencies(AppService, DatabaseService)
export class AppController {
  constructor(appService, databaseService) {
    this.appService = appService;
    this.databaseService = databaseService;
  }

  @Get()
  getHello() {
    return this.databaseService.connectDB();
  }
}
