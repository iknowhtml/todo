import express from 'express';
import morgan from 'morgan';
import client from './utils/db';

const app = express();

app.use(morgan('dev'));

app.get('/', async (req, res) => {
  const db = await client.connect();
  const response = await db.raw('SELECT now()');
  res.send(response.rows[0].now);
});

export default app;
