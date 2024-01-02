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
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  beforeAll(async () => {
    usersSeed = (await prepareDatabase()).users;
  });

  describe('Success calls', () => {
    it('should return 200 if send a valid user and password', async () => {
      const response = await request(app.getHttpServer())
        .post('/user/login')
        .send({
          email: usersSeed[0].email,
          password: usersSeed[0].password,
        });
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        token: expect.any(String),
      });
    });

    describe('Error calls', () => {
      it('should return 400 if send invalid user email or an invalid password', async () => {
        const response = await request(app.getHttpServer())
          .post('/user/login')
          .send({
            email: 'lofocug@naw.uk',
            password: 'QwBGqdCuZUG',
          });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({
          error: 'Bad Request',
          message: 'USER_NOT_FOUND',
          statusCode: 400,
        });
      });
    });
  });
});
