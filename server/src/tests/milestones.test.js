const httpMocks = require('node-mocks-http');
const milestone = require('../controllers/milestone');

const req = httpMocks.createRequest();
const res = httpMocks.createResponse();
const token = process.env.TOKEN;

describe('Get /milestones 마일스톤 조회 API 테스트', () => {
  it('정상 요청일 경우 200 status code를 응답한다', async (done) => {
    await milestone.getAllMilestone(req, res);
    expect(res.statusCode).toEqual(200);
    done();
  });
});
