import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UsersRepository } from '@/infra/repositories/users.repository';
import { AuthService } from './auth.service';
@Module({
  imports: [],
  providers: [UsersRepository, UserService, AuthService],
})
export class ServicesModule {}
