import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../src/app.js';

describe('api', () => {
  it('says hello', async () => {
    const res = await request(app).get('/');
    expect(res.body.message).toBe('Hello from gha-node-ci');
  });
  it('adds from the query string', async () => {
    const res = await request(app).get('/add?a=2&b=3');
    expect(res.body.result).toBe(5);
  });
});
