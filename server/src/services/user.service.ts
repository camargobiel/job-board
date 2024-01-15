import {
  CreateUserParams,
  CreateUserResponse,
  UpdateUserParams,
  UpdateUserResponse,
} from '@/domain/dtos';
import { UsersRepository } from '@/infra/repositories/users.repository';
import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(params: CreateUserParams): Promise<CreateUserResponse> {
    const userConflict = await this.usersRepository.findByUniques({
      email: params.email,
    });
    if (userConflict) throw new ConflictException('USER_ALREADY_EXISTS');

    const createdUser = await this.usersRepository.create(params);
    Reflect.deleteProperty(createdUser, 'password');
    return createdUser;
  }

  async update(params: UpdateUserParams): Promise<UpdateUserResponse> {
    const user = await this.usersRepository.findByUniques({
      id: params.userId,
    });
    if (!user) {
      throw new BadRequestException('USER_NOT_FOUND');
    }
    const updatedUser = await this.usersRepository.update(params);
    return updatedUser;
  }
}
