import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { CatalogModule } from './catalog/catalog.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    CatalogModule,
    RouterModule.register([
      {
        path: 'catalog',
        module: CatalogModule,
      },
    ]),
    AuthModule,
    UsersModule,
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
