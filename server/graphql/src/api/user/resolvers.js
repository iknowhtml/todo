import { AuthenticationError } from 'apollo-server-express';
import User from './model';
import createToken from '../utils/token';

const resolvers = {
  Mutation: {
    signIn: async (_, { username, password }) => {
      console.log(username, password);
      const isValid = User.validate(username, password);

      if (!isValid) {
        throw new AuthenticationError('Invalid username and/or password.');
      }

      return { token: createToken(username, '30m') };
    },
  },
};

export default resolvers;
