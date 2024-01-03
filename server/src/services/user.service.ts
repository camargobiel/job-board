import {
  CreateUserParams,
  CreateUserResponse,
  LoginParams,
  LoginResponse,
  UpdateUserParams,
  UpdateUserResponse,
} from '@/domain/dtos';
import { UsersRepository } from '@/infra/repositories/users.repository';
import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { sign } from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(params: CreateUserParams): Promise<CreateUserResponse> {
    const userConflict = await this.usersRepository.findByEmail({
      email: params.email,
    });
    if (userConflict) throw new ConflictException('USER_ALREADY_EXISTS');

    const createdUser = await this.usersRepository.create(params);
    Reflect.deleteProperty(createdUser, 'password');
    return createdUser;
  }

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
    const token = sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    return { token } as LoginResponse;
  }

  async update(params: UpdateUserParams): Promise<UpdateUserResponse> {
    const user = await this.usersRepository.findByEmail({
      email: params.email,
    });
    if (!user) {
      throw new BadRequestException('USER_NOT_FOUND');
    }
    const updatedUser = await this.usersRepository.update(params);
    return updatedUser;
  }
}
