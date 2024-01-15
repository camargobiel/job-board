import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UsersRepository } from '@/infra/repositories/users.repository';
import { BadRequestException, ConflictException } from '@nestjs/common';

describe('UserService', () => {
  let service: UserService;
  let usersRepository: UsersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, UsersRepository],
    }).compile();

    service = module.get<UserService>(UserService);
    usersRepository = module.get<UsersRepository>(UsersRepository);
  });

  describe('Create User', () => {
    describe('Success', () => {
      it('should create a user', async () => {
        jest.spyOn(usersRepository, 'findByUniques').mockResolvedValue(null);
        jest.spyOn(usersRepository, 'create').mockResolvedValue({
          id: 'cdc98721-3d82-4994-9658-4fdb1ef0eb37',
          name: 'Mittie Valdez',
          email: 'ihi@wuoh.zw',
          password: '123456',
        });
        const result = await service.create({
          name: 'Mittie Valdez',
          password: '123456',
          email: 'ihi@wuoh.zw',
        });
        expect(usersRepository.create).toHaveBeenCalledWith({
          email: 'ihi@wuoh.zw',
          name: 'Mittie Valdez',
          password: '123456',
        });
        expect(result).toEqual({
          id: 'cdc98721-3d82-4994-9658-4fdb1ef0eb37',
          name: 'Mittie Valdez',
          email: 'ihi@wuoh.zw',
        });
      });
    });

    describe('Errors', () => {
      it('should throw conflict exception when send an already taken email', async () => {
        jest.spyOn(usersRepository, 'findByUniques').mockResolvedValue({
          id: 'cdc98721-3d82-4994-9658-4fdb1ef0eb37',
          name: 'Elva Rodgers',
          email: 'ihi@wuoh.zw',
          password: '123456',
        });
        const promise = service.create({
          name: 'Elva Rodgers',
          password: '123456',
          email: 'ihi@wuoh.zw',
        });
        await expect(promise).rejects.toBeInstanceOf(ConflictException);
        await expect(promise).rejects.toThrow('USER_ALREADY_EXISTS');
      });
    });
  });

  describe('Update User', () => {
    describe('Success', () => {
      it('should update a user', async () => {
        jest.spyOn(usersRepository, 'findByUniques').mockResolvedValue({
          id: 'cdc98721-3d82-4994-9658-4fdb1ef0eb37',
          name: 'Stephen Welch',
          email: 'bagep@gimuf.bb',
          password: '123456',
        });
      });

      describe('Errors', () => {
        it('should throw bad request exception when send an invalid email', async () => {
          jest.spyOn(usersRepository, 'findByUniques').mockResolvedValue(null);
          const promise = service.update({
            userId: 'cdc98721-3d82-4994-9658-4fdb1ef0eb37',
            email: 'egu@jeobhi.me',
          });
          await expect(promise).rejects.toBeInstanceOf(BadRequestException);
          await expect(promise).rejects.toThrow('USER_NOT_FOUND');
        });
      });
    });
  });
});
