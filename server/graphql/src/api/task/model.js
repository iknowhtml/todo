import client from '../../utils/db';

const get = async id => {
  const db = await client.connect();
  const [task] = await db
    .select('*')
    .from('tasks')
    .where('id', id);
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
  const task = await get(id);
  return task;
};

const remove = async id => {
  const db = await client.connect();
  const returnCode = await db('tasks')
    .where('id', id)
    .del();

  return returnCode === 1 ? true : false;
};

export default { get, getAll, create, remove };
