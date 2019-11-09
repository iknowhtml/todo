import request from 'supertest';
import app from '../src/app';

describe('Simple Express Server', () => {
  it("should successfully respond to the GET request to '/'", async done => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    done();
  });
});
