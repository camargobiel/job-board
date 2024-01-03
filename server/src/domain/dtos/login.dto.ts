import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../entities/user';

export class LoginParams {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

export type LoginResponse = {
  token: string;
  user: UserEntity;
};
