import { UserEntity } from '@/domain/entities/user';
import { sign } from 'jsonwebtoken';

export const generateToken = (user: UserEntity) => {
  const token = sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
  return token;
};
