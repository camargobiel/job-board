import {
  CreateUserParams,
  CreateUserResponse,
  LoginParams,
  LoginResponse,
} from '@/domain/dtos';
import { UserService } from '@/services';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  @HttpCode(201)
  async create(@Body() user: CreateUserParams): Promise<CreateUserResponse> {
    const createdUser = await this.userService.create(user);
    return createdUser;
  }

  @Post('/login')
  @HttpCode(200)
  async login(@Body() params: LoginParams): Promise<LoginResponse> {
    const result = await this.userService.login(params);
    return result;
  }
}
