import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  const port = 3000;

  app.useLogger(logger);

  logger.log(`Starting the application: port ${port}`);
  await app.listen(port);
}
bootstrap();
