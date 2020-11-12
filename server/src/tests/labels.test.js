const httpMocks = require('node-mocks-http');
const label = require('../controllers/label');
const errorCode = require('../utils/error-code');

const req = httpMocks.createRequest();
const res = httpMocks.createResponse();
const token = process.env.TOKEN;

describe('Get /labels 라벨 조회 API 테스트', () => {
  it('정상 요청일 경우 200 status code를 응답한다', async (done) => {
    await label.getAllLabels(req, res);
    expect(res.statusCode).toEqual(errorCode.RESPONSE_OK);
    done();
  });
});
