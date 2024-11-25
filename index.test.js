const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
  it('should respond with "Hola amigos desde mi API 2"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hola amigos desde mi API 2');
  });
});
