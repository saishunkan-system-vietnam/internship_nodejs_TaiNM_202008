import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const session = require('express-session');
const redis = require('redis');
const redisStore = require('connect-redis')(session);
const redisClient = redis.createClient();
var express = require('express');
var cors = require('cors');

redisClient.on('error', err => {
  console.log('Redis error: ', err);
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.use(
    cors({
      credentials: true,
      origin: 'http://localhost:8080',
    }),
  );
  await app.use(
    session({
      store: new redisStore({
        host: 'localhost',
        port: 6379,
        client: redisClient,
      }),
      name: '_redisDemo',
      secret: 'asdasdasdasd',
      resave: false,
      cookie: {
        secure: false,
        maxAge: 6000000,
      }, // Set to secure:false and expire in 1 minute for demo purposes
      saveUninitialized: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
