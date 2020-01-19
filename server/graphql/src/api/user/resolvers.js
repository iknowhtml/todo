import { AuthenticationError } from 'apollo-server-express';
import createToken from './util/createToken';

const resolvers = {
  Mutation: {
    signIn: async (_, { username, password }, { User }) => {
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
