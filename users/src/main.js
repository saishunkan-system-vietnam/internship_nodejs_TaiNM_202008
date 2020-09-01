import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users/users.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

const logger = new Logger('Main');

const microserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 8888,
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(UsersModule,microserviceOptions);
  await app.listen(() => {
    logger.log('Microservice is listening...');
  });
}
bootstrap();
