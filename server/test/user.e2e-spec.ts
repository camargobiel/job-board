import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { deleteAllDatabaseRows } from '@/infra/prisma/utils/delete-all-database-rows';

describe('E2E User Suites', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  beforeEach(async () => {
    deleteAllDatabaseRows();
  });

  describe('Success calls', () => {
    it('should return 200', async () => {
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
        password: 'ZddKgauzKO',
      });
    });
  });
});
