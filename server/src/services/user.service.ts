import { CreateUserDTO } from '@/domain/dtos';
import { UserEntity } from '@/domain/entities/user';
import { UsersRepository } from '@/infra/repositories/users.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(params: CreateUserDTO): Promise<UserEntity> {
    const result = await this.usersRepository.create(params);
    return result;
  }
}
