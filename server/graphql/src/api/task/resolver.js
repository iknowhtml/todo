import tasks from './model';

const resolver = {
  Query: {
    tasks: async () => await tasks.getAll(),
    task: async (_, { id }) => await tasks.get(id),
  },
  Mutation: {
    createTask: async (_, { name }) => await tasks.create(name),
    removeTask: async (_, { id }) => await tasks.remove(id),
    updateTask: async (_, values) => await tasks.update(values),
  },
};

export default resolver;
