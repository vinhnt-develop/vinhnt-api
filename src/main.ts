import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'nestjs-pino';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { createSwaggerDocument } from './swagger';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });

  const configService = app.get(ConfigService);
  const loggerService = app.get(Logger);
  app.useLogger(app.get(Logger));
  app.use(compression());
  app.enableCors({
    origin: configService.get<string>('CORS_ORIGIN'),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  app.use(cookieParser());
  app.setGlobalPrefix(configService.get<string>('API_PREFIX') ?? 'api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
    prefix: 'v',
  });
  app.use(
    helmet({
      xssFilter: true,
      hidePoweredBy: true,
    }),
  );
  app.useBodyParser('json', { limit: '50mb' });
  app.useBodyParser('urlencoded', { extended: true, limit: '50mb' });
  createSwaggerDocument(app);

  const port: number = configService.get<number>('app.port') as number;
  const host: string = configService.get<string>('app.host') as string;
  await app.listen(port, host, () => {
    loggerService.log(`Application listen in ${port}`);
  });
}
bootstrap();
