import {
  CreateUserParams,
  CreateUserResponse,
  UpdateUserParams,
  UpdateUserResponse,
} from '@/domain/dtos';
import { AuthGuard } from '@/guards/auth.guard';
import { UserService } from '@/services';
import {
  Body,
  Controller,
  HttpCode,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  @HttpCode(201)
  async create(@Body() user: CreateUserParams): Promise<CreateUserResponse> {
    const createdUser = await this.userService.create(user);
    return createdUser;
  }

  @UseGuards(AuthGuard)
  @Patch('/')
  @HttpCode(200)
  async update(@Request() request): Promise<UpdateUserResponse> {
    const params: UpdateUserParams = request.body;
    const { id } = request.user;
    const result = await this.userService.update({ ...params, userId: id });
    return result;
  }
}
