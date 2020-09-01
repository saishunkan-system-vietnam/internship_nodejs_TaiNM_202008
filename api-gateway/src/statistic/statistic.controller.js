import { Controller,Dependencies,Get } from '@nestjs/common';
import { StatisticService } from './statistic.service';

@Controller('statistic')
@Dependencies(StatisticService)
export class StatisticController {
    constructor(statisticService){
        this.statisticService = statisticService;
    }

    @Get()
    getData(){
        return this.statisticService.findStatus();
    }
}
