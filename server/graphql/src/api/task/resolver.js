import tasks from './model';

const resolver = {
  Query: {
    tasks: async () => await tasks.getAll(),
    task: async (_, { id }) => await tasks.get(id),
  },
};

export default resolver;
