import { NestFactory } from '@nestjs/core';
import { TicketModule } from './ticket/ticket.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

const logger = new Logger('Main');

const microserviceOptions = {
  transport: Transport.MQTT,
  options: {
    url: 'mqtt://localhost:1883',
    topic: 'tickets'
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(TicketModule,microserviceOptions);
  await app.listen(() => {
    logger.log('TicketService is listening...');
  });
}
bootstrap();
