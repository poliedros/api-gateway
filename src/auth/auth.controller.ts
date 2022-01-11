import { LocalAuthGuard } from './local-auth.guard';
import { Controller, Post, Request, UseGuards } from '@nestjs/common';

@Controller()
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}
