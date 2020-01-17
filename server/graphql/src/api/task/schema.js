import { gql } from 'apollo-server-express';

const schema = gql`
  type Query {
    tasks: [Task!]!
    task(id: String!): Task!
  }

  type Task {
    id: ID!
    name: String!
    completed: Boolean!
    description: String
    due_date: String
    due_time: String
    # location:
  }
`;

export default schema;
