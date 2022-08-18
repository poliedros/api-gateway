import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('items')
export class ItemsController {
  constructor(
    @Inject('ITEMS_SERVICE') private itemsServiceProxy: ClientProxy,
  ) {}

  @Get()
  async findAll() {
    console.log('send');
    return this.itemsServiceProxy.send({ items: 'findall' }, {});
  }
}
