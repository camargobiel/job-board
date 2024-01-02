import { UserEntity } from '../entities/user';

export type FindUserByEmailParams = {
  email: string;
};

export type FindUserByEmailResponse = UserEntity | null;
