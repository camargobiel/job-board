import { UserEntity } from '../entities/user';

export type CreateUserParams = {
  name: string;
  email: string;
  password: string;
};

export type CreateUserResponse = Omit<UserEntity, 'password'>;
