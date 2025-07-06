import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService} from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService); //chạy trên cổng 8080 gọi đến port trong .env
  const port = configService.get('PORT');


  await app.listen(port);
}
bootstrap();
