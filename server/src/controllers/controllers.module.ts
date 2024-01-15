import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from '@/services';
import { UsersRepository } from '@/infra/repositories/users.repository';
import { AuthController } from './auth.controller';
import { AuthService } from '@/services/auth.service';

@Module({
  controllers: [UserController, AuthController],
  imports: [],
  providers: [UserService, AuthService, UsersRepository],
})
export class ControllersModule {}
