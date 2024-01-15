import { LoginParams, LoginResponse } from '@/domain/dtos';
import { UsersRepository } from '@/infra/repositories/users.repository';
import { BadRequestException, Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async login(params: LoginParams): Promise<LoginResponse> {
    const user = await this.usersRepository.findByEmail({
      email: params.email,
    });
    if (!user) {
      throw new BadRequestException('INVALID_CREDENTIALS');
    }
    if (user.password !== params.password) {
      throw new BadRequestException('INVALID_CREDENTIALS');
    }
    Reflect.deleteProperty(user, 'password');
    const token = sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    return { token, user };
  }
}
