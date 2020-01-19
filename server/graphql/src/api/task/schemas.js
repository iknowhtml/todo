import { gql } from 'apollo-server-express';

const schema = gql`
  type Task {
    id: ID!
    name: String!
    completed: Boolean!
    description: String
    due_date: String
    due_time: String
    # location:
  }

  type Success {
    removalSuccess: Boolean!
  }

  extend type Query {
    tasks: [Task!]!
    task(id: String!): Task!
  }

  extend type Mutation {
    createTask(
      name: String!
      description: String
      due_date: String
      due_time: String
    ): Task

    removeTask(id: ID!): Success!

    updateTask(
      id: ID!
      name: String
      completed: Boolean
      description: String
      due_date: String
      due_time: String
    ): Task
  }
`;

export default schema;
