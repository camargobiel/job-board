import { UsersRepository } from './users.repository';
import { Module } from '@nestjs/common';

@Module({
  providers: [UsersRepository],
  exports: [UsersRepository],
})
export class RepositoriesModule {}
