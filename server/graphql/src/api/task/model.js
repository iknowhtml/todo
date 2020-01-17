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

export default { get, getAll };
