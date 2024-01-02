import { UserEntity } from '../entities/user';

export type LoginParams = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: UserEntity;
};
