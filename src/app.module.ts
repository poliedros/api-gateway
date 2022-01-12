import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { CatalogModule } from './catalog/catalog.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
