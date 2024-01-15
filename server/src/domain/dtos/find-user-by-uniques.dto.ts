import { UserEntity } from '../entities/user';

export type FindUserByUniquesParams = {
  id?: string;
  email?: string;
};

export type FindUserByUniquesResponse = UserEntity | null;
