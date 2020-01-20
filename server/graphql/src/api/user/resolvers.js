import { AuthenticationError } from 'apollo-server-express';
import jwt from 'jsonwebtoken';
import User from './model';
const resolvers = {
  Mutation: {
    signIn: async (_, { username, password }) => {
      console.log(username, password);
      const isValid = User.validate(username, password);

      if (!isValid) {
        throw new AuthenticationError('Invalid username and/or password.');
      }

      const token = await jwt.sign({ username }, process.env.TOKEN_SECRET);
    },
  },
};

export default resolvers;
