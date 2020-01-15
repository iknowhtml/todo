import express from 'express';
import morgan from 'morgan';
import apollo from './apollo';

const app = express();

if (process.env.ENVIRONMENT === 'development') {
  app.use(morgan('dev'));
}

apollo.applyMiddleware({ app, path: '/' });

export default app;
