import { NestFactory } from '@nestjs/core';
import { DatabaseModule } from './database/database.module';

async function bootstrap() {
  const app = await NestFactory.create(DatabaseModule);
  await app.listen(3000);
}
bootstrap();
