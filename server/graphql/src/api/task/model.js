import client from '../utils/database';

const get = async id => {
  const db = await client.connect();
  const [task] = await db
    .select('*')
    .from('tasks')
    .where({ id });

  return task;
};
const getAll = async () => {
  const db = await client.connect();
  const tasks = await db.select('*').from('tasks');
  return tasks;
};

const create = async name => {
  const db = await client.connect();
  const [id] = await db('tasks').insert({ name }, 'id');
  const newTask = await get(id);

  return newTask;
};

const remove = async id => {
  const db = await client.connect();
  const returnCode = await db('tasks')
    .where('id', id)
    .del();

  return { removalSuccess: returnCode === 1 };
};

const update = async (id, values) => {
  const db = await client.connect();
  const [updatedTask] = await db('tasks')
    .where({ id })
    .update(values, [
      'id',
      'name',
      'completed',
      'description',
      'due_date',
      'due_time',
    ]);

  return updatedTask;
};

export default { get, getAll, create, remove, update };
