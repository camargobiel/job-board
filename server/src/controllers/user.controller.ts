import {
  CreateUserParams,
  CreateUserResponse,
  LoginParams,
  LoginResponse,
} from '@/domain/dtos';
import { UserService } from '@/services';
import { Controller, HttpCode, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  async create(@Req() request: Request): Promise<CreateUserResponse> {
    const user: CreateUserParams = request.body;
    const createdUser = await this.userService.create(user);
    return createdUser;
  }

  @Post('/login')
  @HttpCode(200)
  async login(@Req() request: Request): Promise<LoginResponse> {
    const params: LoginParams = request.body;
    const result = await this.userService.login(params);
    return result;
  }
}
