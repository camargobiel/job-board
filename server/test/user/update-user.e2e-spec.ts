import { AppModule } from '../../src/app.module';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { prepareDatabase } from '@/infra/prisma/utils';
import { generateToken } from '../generate-token';
import { UserEntity } from '@/domain/entities/user';

describe('E2E Create User Suites', () => {
  let app: INestApplication;
  let usersSeeds: UserEntity[];

  beforeEach(async () => {
    usersSeeds = (await prepareDatabase()).users;

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('Success calls', () => {
    it('should update an user', async () => {
      const userSeed = usersSeeds[0];
      const response = await request(app.getHttpServer())
        .patch('/user')
        .send({
          name: 'New name',
        })
        .auth(generateToken(userSeed), { type: 'bearer' });
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        id: expect.any(String),
        email: expect.any(String),
        name: 'New name',
      });
    });
  });
});
