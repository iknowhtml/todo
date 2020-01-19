const resolver = {
  Query: {
    tasks: async (_, __, { Task }) => await Task.getAll(),
    task: async (_, { id }, { Task }) => await Task.get(id),
  },
  Mutation: {
    createTask: async (_, { name }, { Task }) => await Task.create(name),
    removeTask: async (_, { id }, { Task }) => await Task.remove(id),
    updateTask: async (_, { id, ...values }, { Task }) =>
      await Task.update(id, values),
  },
};

export default resolver;
