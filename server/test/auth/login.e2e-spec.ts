import { AppModule } from '../../src/app.module';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { prepareDatabase } from '@/infra/prisma/utils';
import { UserEntity } from '@/domain/entities/user';

describe('E2E Login Suites', () => {
  let app: INestApplication;
  let usersSeed: UserEntity[];

  beforeEach(async () => {
    usersSeed = (await prepareDatabase()).users;

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('Success calls', () => {
    it('should return 200 if send a valid user and password', async () => {
      const userSeed = usersSeed[0];
      const response = await request(app.getHttpServer()).post('/auth').send({
        email: userSeed.email,
        password: userSeed.password,
      });
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        token: expect.any(String),
        user: {
          id: expect.any(String),
          email: userSeed.email,
          name: userSeed.name,
        },
      });
    });

    describe('Error calls', () => {
      it('should return 400 if send invalid user email or an invalid password', async () => {
        const response = await request(app.getHttpServer()).post('/auth').send({
          email: 'lofocug@naw.uk',
          password: 'QwBGqdCuZUG',
        });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({
          error: 'Bad Request',
          message: 'INVALID_CREDENTIALS',
          statusCode: 400,
        });
      });
    });
  });
});
