import { LoginParams, LoginResponse } from '@/domain/dtos';
import { AuthService } from '@/services/auth.service';
import { Controller, Post, HttpCode, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/')
  @HttpCode(200)
  async login(@Body() params: LoginParams): Promise<LoginResponse> {
    const result = await this.authService.login(params);
    return result;
  }
}
