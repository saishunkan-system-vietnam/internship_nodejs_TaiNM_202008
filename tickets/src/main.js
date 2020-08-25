import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { DataserviceModule } from './dataservice/dataservice.module';

async function bootstrap() {
  const app = await NestFactory.create(DataserviceModule);
  await app.listen(3000);
}
bootstrap();
