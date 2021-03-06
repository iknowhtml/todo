import { gql } from 'apollo-server-express';

const schemas = gql`
  scalar Location

  type Task {
    id: ID!
    name: String!
    completed: Boolean!
    description: String
    due_date: String
    due_time: String
    location: Location
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

    removeTask(id: ID!): Task

    updateTask(
      id: ID!
      name: String
      completed: Boolean
      description: String
      due_date: String
      due_time: String
      location: Location
    ): Task
  }
`;

export default schemas;
