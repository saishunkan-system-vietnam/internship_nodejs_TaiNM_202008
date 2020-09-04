import { NestFactory } from '@nestjs/core';
import { TicketModule } from './ticket/ticket.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

const logger = new Logger('Main');

const microserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 8080,
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(TicketModule,microserviceOptions);
  await app.listen(() => {
    logger.log('Microservice is listening...');
  });
}
bootstrap();
