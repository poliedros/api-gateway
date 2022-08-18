import { CreateItemDto } from './dto/create-item.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('items')
export class ItemsController {
  constructor(
    @Inject('ITEMS_SERVICE') private itemsServiceProxy: ClientProxy,
  ) {}

  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    return this.itemsServiceProxy.send({ items: 'create' }, createItemDto);
  }

  @Get()
  async findAll() {
    return this.itemsServiceProxy.send({ items: 'findall' }, {});
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.itemsServiceProxy.send({ items: 'find' }, { id });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    updateItemDto._id = id;
    return this.itemsServiceProxy.send({ items: 'patch' }, updateItemDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.itemsServiceProxy.send({ items: 'remove' }, id);
  }
}
