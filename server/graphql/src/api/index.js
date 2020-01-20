import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schemas';
import resolvers from './resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    return { token: req.headers.authorization || null };
  },
  playground: process.env.ENVIRONMENT === 'development',
});

export default server;
