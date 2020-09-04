import { Module, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { LoggerMiddleware } from '../middleware/logger.middleware';

@Module({
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {
  configure(consumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'users/register', method: RequestMethod.POST },
        { path: 'users/login', method: RequestMethod.POST },
        // 'cats/(.*)',
      )
      .forRoutes(UsersController);
  }
}
