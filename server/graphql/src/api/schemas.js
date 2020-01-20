import { gql } from 'apollo-server-express';
import taskSchemas from './task/schemas';
import userSchemas from './user/schemas';

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

export default [rootSchema, taskSchemas, userSchemas];
