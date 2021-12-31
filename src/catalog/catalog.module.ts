import { CacheModule, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import type { ClientOpts as RedisClientOpts } from 'redis';
import * as redisStore from 'cache-manager-redis-store';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CATALOG_SERVICE',
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379',
        },
      },
    ]),
    CacheModule.register<RedisClientOpts>({
      store: redisStore,
      // Store-specific configuration:
      host: 'localhost',
      port: 6379,
    }),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class CatalogModule {}
