import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService); //chạy trên cổng 8080 gọi đến port trong .env
  const port = configService.get('PORT');
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true // báo những trường ko tồn tại
  }));
  app.setGlobalPrefix('api/v1', { exclude: [''] }); // dùng  app.setGlobalPrefix để cho hiện thị api/v1 ở đầu và dùng exclude để hiện thị trang chủ 8080 mà ko cần gỏ api/v1

  await app.listen(port);
}
bootstrap();
