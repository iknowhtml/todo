import taskSchema from './task/schemas';
import userSchema from './user/schemas';
import { gql } from 'apollo-server-express';

const rootSchema = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }

  type Subscription {
    _: String
  }
`;

export default [rootSchema, taskSchema, userSchema];
