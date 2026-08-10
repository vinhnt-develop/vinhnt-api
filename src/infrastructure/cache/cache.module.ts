import {
  CacheInterceptor,
  CacheModule as NestCacheModule,
} from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import KeyvRedis, { Keyv } from '@keyv/redis';
import { KeyvCacheableMemory } from 'cacheable';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    NestCacheModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        stores: [
          new Keyv({
            store: new KeyvCacheableMemory({ ttl: 60000, lruSize: 5000 }),
          }),
          new KeyvRedis(
            `redis://${configService.get('REDIS_HOST')}:${configService.get('REDIS_PORT')}`,
          ),
        ],
      }),
    }),
  ],
  providers: [{ provide: APP_INTERCEPTOR, useClass: CacheInterceptor }],
  exports: [NestCacheModule],
})
export class CacheModule {}
