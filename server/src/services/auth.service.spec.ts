import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersRepository } from '@/infra/repositories/users.repository';
import { BadRequestException } from '@nestjs/common';

describe('AuthService', () => {
  let service: AuthService;
  let usersRepository: UsersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, UsersRepository],
    }).compile();

    service = module.get<AuthService>(AuthService);
    usersRepository = module.get<UsersRepository>(UsersRepository);
  });

  describe('Login', () => {
    describe('Success', () => {
      it('should login a user', async () => {
        jest.spyOn(usersRepository, 'findByEmail').mockResolvedValue({
          id: 'cdc98721-3d82-4994-9658-4fdb1ef0eb37',
          name: 'Ivan Sandoval',
          email: 'meleszis@hodpod.be',
          password: '123456',
        });
        const result = await service.login({
          email: 'meleszis@hodpod.be',
          password: '123456',
        });
        expect(result).toEqual({
          token: expect.any(String),
          user: {
            email: 'meleszis@hodpod.be',
            id: 'cdc98721-3d82-4994-9658-4fdb1ef0eb37',
            name: 'Ivan Sandoval',
          },
        });
      });
    });

    describe('Errors', () => {
      it('should throw bad request exception when send an invalid email', async () => {
        jest.spyOn(usersRepository, 'findByEmail').mockResolvedValue(null);
        const promise = service.login({
          email: 'nev@vadej.ng',
          password: '123456',
        });
        await expect(promise).rejects.toBeInstanceOf(BadRequestException);
        await expect(promise).rejects.toThrow('INVALID_CREDENTIALS');
      });

      it('should throw bad request exception when send an invalid password', async () => {
        jest.spyOn(usersRepository, 'findByEmail').mockResolvedValue({
          id: 'cdc98721-3d82-4994-9658-4fdb1ef0eb37',
          name: 'Beatrice Russell',
          email: 'tufewesa@fajloita.mk',
          password: '123456',
        });
        const promise = service.login({
          email: 'tufewesa@fajloita.mk',
          password: 'different password',
        });
        await expect(promise).rejects.toBeInstanceOf(BadRequestException);
        await expect(promise).rejects.toThrow('INVALID_CREDENTIALS');
      });
    });
  });
});
