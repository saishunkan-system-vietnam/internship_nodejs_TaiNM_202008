import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { connect } from '../connectdb';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, connect],
  exports: [connect],
})
export class AppModule {}
