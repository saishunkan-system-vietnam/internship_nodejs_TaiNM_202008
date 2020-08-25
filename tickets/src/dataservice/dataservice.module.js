import { Module } from '@nestjs/common';
import { DataserviceController } from './dataservice.controller';
import { DataserviceService } from './dataservice.service';

@Module({
  controllers: [DataserviceController],
  providers: [DataserviceService],
})
export class DataserviceModule {}
