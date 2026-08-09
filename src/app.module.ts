import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { infrastructure } from './infrastructure';
import {
  appConfig,
  configuration,
  databaseConfig,
  validationSchema,
} from './configuration';
import { modules } from './modules';
import { CoreModule } from './core';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
      load: [configuration, appConfig, databaseConfig],
      validationSchema: validationSchema,
      expandVariables: true,
      cache: true,
    }),
    CoreModule,
    ...infrastructure,
    ...modules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
