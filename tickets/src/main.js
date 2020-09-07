import { NestFactory } from '@nestjs/core';
import { TicketModule } from './ticket/ticket.module';

async function bootstrap() {
  const app = await NestFactory.create(TicketModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
