import { Controller,Dependencies,Get, Bind, Req } from '@nestjs/common';
import { StatisticService } from './statistic.service';

@Controller('statistic')
@Dependencies(StatisticService)
export class StatisticController {
    constructor(statisticService){
        this.statisticService = statisticService;
    }

    @Get()
    @Bind(Req())
    getData(req){
        // console.log(req.session.user);
        if (req.session.user.level == 2) {
            return {
                "mess": "levelFail"
            }
        }else{
            return this.statisticService.findStatus();
        }
    }
}
