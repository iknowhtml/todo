import Task from './model';
import authenticate from '../utils/authenticate';

const resolvers = {
  Query: {
    tasks: async (_, __, { user_id }) => await Task.getAll(user_id),
    task: async (_, { id }, { user_id }) => await Task.getById(id, user_id),
  },
  Mutation: {
    createTask: async (_, { name }, { user_id }) =>
      await Task.create(name, user_id),
    removeTask: async (_, { id }, { user_id }) =>
      await Task.removeById(id, user_id),
    updateTask: async (_, { id, ...values }, { user_id }) =>
      await Task.updateById(id, values, user_id),
  },
};

export default authenticate(resolvers);
