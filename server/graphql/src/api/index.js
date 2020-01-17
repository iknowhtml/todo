import { ApolloServer } from 'apollo-server-express';
import resolvers from './resolvers';
import typeDefs from './schemas';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: process.env.ENVIRONMENT === 'development',
});

export default server;
