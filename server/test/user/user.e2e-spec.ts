import { AppModule } from '../../src/app.module';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

describe('E2E User Suites', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('Success calls', () => {
    it('should return 200', async () => {
      const response = await request(app.getHttpServer()).post('/user');

      expect(response.status).toBe(201);
      expect(response.body).toBe('Hello World');
    });
  });
});
