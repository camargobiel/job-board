import {
  CreateUserParams,
  FindUserByEmailParams,
  FindUserByEmailResponse,
} from '@/domain/dtos';
import { UserEntity } from '@/domain/entities/user';
import { Injectable } from '@nestjs/common';
import prisma from '@/infra/prisma';

@Injectable()
export class UsersRepository {
  constructor() {}

  async create(params: CreateUserParams): Promise<UserEntity> {
    return prisma.user.create({
      data: params,
    });
  }

  async findByEmail({
    email,
  }: FindUserByEmailParams): Promise<FindUserByEmailResponse> {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}
