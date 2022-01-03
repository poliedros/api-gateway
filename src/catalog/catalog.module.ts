import { CacheModule, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import type { ClientOpts as RedisClientOpts } from 'redis';
import * as redisStore from 'cache-manager-redis-store';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([
      {
        name: 'CATALOG_SERVICE',
        transport: Transport.REDIS,
        options: {
          url: `redis://${process.env.REDIS_URL}:6379`,
        },
      },
    ]),
    CacheModule.register<RedisClientOpts>({
      store: redisStore,
      // Store-specific configuration:
      host: `${process.env.REDIS_URL}`,
      port: 6379,
    }),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class CatalogModule {}
