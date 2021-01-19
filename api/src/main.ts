import dotenv = require('dotenv');
dotenv.config();

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(MainModule);
  await app.listen(PORT);
  Logger.log(`Listen on port: ${PORT}`);
}
bootstrap();
