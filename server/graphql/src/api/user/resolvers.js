import { AuthenticationError } from 'apollo-server-express';
import jwt from 'jsonwebtoken';
import User from './model';

const resolvers = {
  Mutation: {
    signIn: async (_, { username, password }) => {
      const isValid = await User.validate(username, password);

      if (!isValid) {
        throw new AuthenticationError('Invalid username and/or password.');
      }

      const user_id = await User.getIdByUsername(username);
      const token = await jwt.sign({ user_id }, process.env.JWT_SECRET);

      return { token };
    },
  },
};

export default resolvers;
