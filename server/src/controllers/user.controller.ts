import { Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor() {}

  @Post('/')
  create() {
    const user = {
      id: 1,
    };
    return user;
  }
}
