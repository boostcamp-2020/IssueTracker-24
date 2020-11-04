const request = require('supertest');
const app = require('../app');

const token = process.env.TOKEN;

describe('GET /issues 이슈목록 조회 API 테스트', () => {
  it('인증된 사용자의 정상 요청일 경우 200 status code를 응답한다', async (done) => {
    const res = await request(app).get('/issues').set('Authorization', `Bearer ${token}`);
    expect(res.status).toEqual(200);
    done();
  });
});

describe('GET /issues 이슈목록 조회 API 테스트', () => {
  it('인증이 안된 사용자가 요청할 경우 401 status code를 응답한다', async (done) => {
    const res = await request(app).get('/issues');
    expect(res.status).toEqual(401);
    done();
  });
});
