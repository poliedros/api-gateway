import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  async create(createProductDto: CreateProductDto) {
    console.log(createProductDto);
  }
}
