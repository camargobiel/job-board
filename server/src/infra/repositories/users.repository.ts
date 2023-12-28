import { CreateUserDTO } from '@/domain/dtos';
import { UserEntity } from '@/domain/entities/user';
import { Injectable } from '@nestjs/common';
import prisma from '@/infra/prisma';

@Injectable()
export class UsersRepository {
  constructor() {}

  async create(params: CreateUserDTO): Promise<UserEntity> {
    return prisma.user.create({
      data: params,
    });
  }
}
