import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const res = await chai.request(app).get('/');
    expect(res).to.have.status(200);
  });

  it('should return the correct response body', async () => {
    const res = await chai.request(app).get('/');
    expect(res.text).to.equal('¡Hola desde Express!');
  });
});

