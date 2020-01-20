import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schemas';
import resolvers from './resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers['x-token'] || null;
    console.log(token);
    return {};
  },
  playground: process.env.ENVIRONMENT === 'development',
});

export default server;
