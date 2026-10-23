import express from 'express';
import { add, average } from './math.js';

export const app = express();

app.get('/', (req, res) => res.json({ message: 'Hello from gha-node-ci' }));
app.get('/add', (req, res) => res.json({ result: add(Number(req.query.a), Number(req.query.b)) }));
app.get('/average', (req, res) => {
  const numbers = String(req.query.n || '').split(',').filter(Boolean).map(Number);
  res.json({ result: average(numbers) });
});
