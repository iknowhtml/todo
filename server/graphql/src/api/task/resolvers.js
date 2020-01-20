import Task from './model';

const resolver = {
  Query: {
    tasks: async () => await Task.getAll(),
    task: async (_, { id }) => await Task.get(id),
  },
  Mutation: {
    createTask: async (_, { name }) => await Task.create(name),
    removeTask: async (_, { id }) => await Task.remove(id),
    updateTask: async (_, { id, ...values }) => await Task.update(id, values),
  },
};

export default resolver;
