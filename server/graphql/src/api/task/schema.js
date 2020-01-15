import { gql } from 'apollo-server-express';

const schema = gql`
  type Query {
    tasks: [Task!]
    task(id: Int!): Task!
  }

  type Task {
    id: Int!
    name: String!
    completed: Boolean!
    description: String
    # due_date: Date,
    #due_time: Time,
    # location: Location
  }
`;

export default schema;
