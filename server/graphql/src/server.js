import express from 'express';
import morgan from 'morgan';
import apollo from './api';

const server = express();

if (process.env.ENVIRONMENT === 'development') {
  server.use(morgan('dev'));
}

// applies Apollo as middleware for Express application
apollo.applyMiddleware({ app: server, path: '/' });

export default server;
