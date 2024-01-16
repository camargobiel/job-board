import {
  CreateUserParams,
  FindUserByUniquesParams,
  FindUserByUniquesResponse,
  UpdateUserParams,
} from '@/domain/dtos';
import { UserEntity } from '@/domain/entities/user';
import { Injectable } from '@nestjs/common';
import prisma from '@/infra/prisma';

@Injectable()
export class UsersRepository {
  constructor() {}

  async findByUniques({
    email,
    id,
  }: FindUserByUniquesParams): Promise<FindUserByUniquesResponse> {
    return prisma.user.findUnique({
      where: {
        id,
        email,
      },
    });
  }

  async create(params: CreateUserParams): Promise<UserEntity> {
    return prisma.user.create({
      data: params,
    });
  }

  async update({ userId, ...data }: UpdateUserParams): Promise<UserEntity> {
    return prisma.user.update({
      where: {
        id: userId,
      },
      data,
    });
  }
}
