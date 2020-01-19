import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schemas';
import resolvers from './resolvers';
import Task from './task/model';
import User from './user/model';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    Task,
    User,
  },
  playground: process.env.ENVIRONMENT === 'development',
});

export default server;
