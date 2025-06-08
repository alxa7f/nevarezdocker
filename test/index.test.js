const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index.js');

chai.use(chaiHttp);

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const res = await chai.request(app).get('/');
    chai.expect(res).to.have.status(200);
  });

  it('should return the correct response body', async () => {
    const res = await chai.request(app).get('/');
    chai.expect(res.text).to.equal('¡Hola desde Express!');
  });
});
