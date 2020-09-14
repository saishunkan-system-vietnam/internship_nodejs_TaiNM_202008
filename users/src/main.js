import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users/users.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
const logger = new Logger('Main');

// const session = require('express-session');
// const redis = require('redis');
// const redisStore = require('connect-redis')(session);	
// const redisClient = redis.createClient();

// redisClient.on('error', (err) => {
//   console.log('Redis error: ', err);
// });


const microserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 8888,
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(UsersModule,microserviceOptions);
  // await app.use(session({
  //   store: new redisStore({ host: 'localhost', port: 6379, client: redisClient }),
  //   name: '_redisDemo', 
  //   secret: "asdasdasdasd",
  //   resave: true,
  //   cookie: { secure: false, maxAge: 60000 }, // Set to secure:false and expire in 1 minute for demo purposes
  //   saveUninitialized: false
  // }));
  await app.listen(() => {
    logger.log('UserService is listening...');
  });
}
bootstrap();
