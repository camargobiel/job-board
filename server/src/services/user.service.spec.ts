import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UsersRepository } from '@/infra/repositories/users.repository';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, UsersRepository],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
