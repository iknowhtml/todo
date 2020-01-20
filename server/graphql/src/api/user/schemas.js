import { gql } from 'apollo-server-express';

const schemas = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    first_name: String!
    last_name: String!
  }
  type Token {
    token: String!
  }
  extend type Mutation {
    signIn(username: String!, password: String!): Token
  }
`;

export default schemas;
