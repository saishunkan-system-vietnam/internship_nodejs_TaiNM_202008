import { Controller, Dependencies,Bind } from '@nestjs/common';
import { StatisticService } from './statistic.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('statistic')
@Dependencies(StatisticService)
export class StatisticController {
    constructor(statisticService){
        this.statisticService = statisticService;
    }

    @Bind()
    @MessagePattern('get')
    async getData(){
        try {
            let array1 = await this.statisticService.findStatus(1);
            let array2 = await this.statisticService.findStatus(3);
            let array3 = await this.statisticService.findStatus(4);

            let array = {
                "mess": "success",
                "pending":array1.length,
                "success":array2.length,
                "danger":array3.length
            };
            return array;
        } catch (error) {
            return {
                "mess": error
            }
        }
        
    }
}
