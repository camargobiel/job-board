import { UserEntity } from '@/domain/entities/user';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserParams {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  email?: string;

  @ApiProperty()
  password?: string;
}

export type UpdateUserResponse = UserEntity;
