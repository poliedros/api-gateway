import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';

export type UserValidation = {
  id: string;
  username: string;
};

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<UserValidation> {
    const user = await this.usersService.findOne(username);

    if (user && user.password == password) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }
}
