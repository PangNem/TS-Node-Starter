import * as request from 'supertest';
import app from '../../src/app';
import sequelize from '../../src/models/sequelize';
import User from '../../src/models/User';

describe('POST /user', () => {
  const url = '/user';
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
  describe('유저 생성 실패시', () => {
    test('형식에 맞지 않는 데이터 요청시 422 반환', async () => {
      const response = await request(app)
        .post(url)
        .send({ 'qwer': 'asdf' });

      expect(response.status).toBe(422);
    });
  });
});
