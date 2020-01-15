import tasks from './tasks';

const resolver = {
  Query: {
    tasks: () => Object.values(tasks),
    task: (_, { id }) => tasks[id],
  },
};

export default resolver;
