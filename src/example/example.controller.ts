import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/guards/role.guard';
import { Role } from 'src/enums/role.enum';

@Controller('example')
export class ExampleController {
  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  get() {
    return ['Hello world'];
  }
}
