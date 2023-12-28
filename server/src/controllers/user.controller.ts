import { CreateUserDTO } from '@/domain/dtos';
import { UserEntity } from '@/domain/entities/user';
import { UserService } from '@/services';
import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  async create(@Req() request: Request): Promise<UserEntity> {
    const user: CreateUserDTO = request.body;
    const createdUser = await this.userService.create(user);
    return createdUser;
  }
}
