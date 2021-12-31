import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('CATALOG_SERVICE') private catalogServiceProxy: ClientProxy,
  ) {}

  async create(createProductDto: CreateProductDto) {
    this.catalogServiceProxy.emit<CreateProductDto>(
      'catalog/create_product',
      createProductDto,
    );
  }

  async findAll() {
    return this.catalogServiceProxy.send('catalog/find_products', {});
  }
}
