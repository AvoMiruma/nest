import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle("Курс валют країн")
      .setDescription('Проект для перегляду курсу валюти вашої країни відносно доллара та євро')
      .setVersion('1.0.0')
      .addTag('AvoMiruma')
      .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api', app, document);

  app.setGlobalPrefix('api')
  await app.listen(5000);
}
bootstrap();
