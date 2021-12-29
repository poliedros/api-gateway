import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { CatalogModule } from './catalog/catalog.module';

@Module({
  imports: [
    CatalogModule,
    RouterModule.register([
      {
        path: 'catalog',
        module: CatalogModule,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
