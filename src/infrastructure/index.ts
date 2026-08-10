import { CacheModule } from './cache';
import { DatabaseModule } from './database';
import { LoggerModule } from './logger';

export const infrastructure = [LoggerModule, DatabaseModule, CacheModule];
