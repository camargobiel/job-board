import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../entities/user';

export class CreateUserParams {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

export type CreateUserResponse = Omit<UserEntity, 'password'>;
