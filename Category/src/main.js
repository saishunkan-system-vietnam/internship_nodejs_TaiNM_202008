import { NestFactory } from '@nestjs/core';
import { CategoryModule } from './category.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from "@nestjs/common";

const logger = new Logger();

const microserviceOptions = {
  transport: Transport.MQTT,
  options: {
    url: 'mqtt://localhost:1883',
    topic: 'category'
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(CategoryModule, microserviceOptions);
  app.listen(() => {
    logger.log('Category service is listening...');
  });
}
bootstrap();
