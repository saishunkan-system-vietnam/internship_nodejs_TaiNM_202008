import { NestFactory } from '@nestjs/core';
import { CategoryModule } from './category.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from "@nestjs/common";

const logger = new Logger();

const microserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 1998,
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(CategoryModule, microserviceOptions);
  app.listen(() => {
    logger.log('Category service is listening...');
  });
}
bootstrap();
