import { AppModule } from '../../src/app.module';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { prepareDatabase } from '@/infra/prisma/utils';

describe('E2E Create User Suites', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  beforeAll(async () => {
    await prepareDatabase();
  });

  describe('Success calls', () => {
    it('should return 201 if send a valid user object', async () => {
      const response = await request(app.getHttpServer()).post('/user').send({
        name: 'Jackson Gibbs',
        email: 'uhiludti@fohewaw.ls',
        password: 'ZddKgauzKO',
      });

      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        id: expect.any(String),
        email: 'uhiludti@fohewaw.ls',
        name: 'Jackson Gibbs',
      });
    });
  });

  describe('Error calls', () => {
    it('should return 409 if send an already taken email', async () => {
      const response = await request(app.getHttpServer()).post('/user').send({
        name: 'Cora George',
        email: 'uhiludti@fohewaw.ls',
        password: 'cxnvlzXg',
      });

      expect(response.status).toBe(409);
      expect(response.body).toEqual({
        error: 'Conflict',
        message: 'USER_ALREADY_EXISTS',
        statusCode: 409,
      });
    });
  });
});
