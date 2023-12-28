import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UsersRepository } from '@/infra/repositories/users.repository';
@Module({
  imports: [],
  providers: [UsersRepository, UserService],
})
export class ServicesModule {}
