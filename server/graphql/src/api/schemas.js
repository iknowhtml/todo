import taskSchema from './task/schema';
import userSchema from './user/schema';
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
