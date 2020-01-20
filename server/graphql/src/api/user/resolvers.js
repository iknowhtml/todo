import User from './model';
import { AuthenticationError } from 'apollo-server-express';
import createToken from './utils/createToken';

const resolvers = {
  Mutation: {
    signIn: async (_, { username, password }) => {
      const isValid = User.validate(username, password);

      if (!isValid) {
        throw new AuthenticationError('Invalid username and/or password.');
      }

      return { token: createToken(username, '30m') };
    },
  },
};

export default resolvers;
