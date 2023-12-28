import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from '@/services';
import { UsersRepository } from '@/infra/repositories/users.repository';

@Module({
  controllers: [UserController],
  imports: [],
  providers: [UserService, UsersRepository],
})
export class ControllersModule {}
