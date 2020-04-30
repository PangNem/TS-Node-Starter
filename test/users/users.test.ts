import * as request from 'supertest';
import app from '../../src/app';
import sequelize from '../../src/models/sequelize';
import User from '../../src/models/User';

describe('POST /users', () => {
  const url = '/users';
  const testData = { 'nickname': 'pangnem' };

  let testUserId: number;

  beforeAll(async done => {
    await sequelize.sync();
    const testUser = await User.create({ testData });

    testUserId = testUser.id;
    done();
  });

  afterAll(async done => {
    await User.destroy({ where: { id: testUserId } });
    done();
  });

  describe('유저 생성 성공시', () => {
    test('유저 닉네임 반환', async () => {
      const response = await request(app)
        .post(url)
        .send(testData);

      expect(response.status).toBe(201);
      expect(response.body.nickname).toBe('pangnem');
    });
  });
});
