import { getPool } from '../utils/databasePool';

const getById = async (id, author_id) => {
  const pool = await getPool();
  const statement = {
    text: 'SELECT * FROM tasks WHERE author_id = $2 AND id = $1',
    values: [id, author_id],
  };
  const {
    rows: [task],
  } = await pool.query(statement);
  return task;
};
const getAll = async author_id => {
  const pool = await getPool();
  const statement = {
    text: 'SELECT * FROM tasks WHERE author_id = $1',
    values: [author_id],
  };
  const { rows: tasks } = await pool.query(statement);
  return tasks;
};

const create = async (name, author_id) => {
  const pool = await getPool();
  const statement = {
    text: 'INSERT INTO tasks (name, author_id) VALUES ($1, $2) RETURNING *',
    values: [name, author_id],
  };
  const {
    rows: [createdTask],
  } = await pool.query(statement);

  return createdTask;
};

const removeById = async (id, author_id) => {
  const pool = await getPool();
  const statement = {
    text: 'DELETE FROM tasks WHERE author_id = $2 AND id = $1 RETURNING *',
    values: [id, author_id],
  };
  const {
    rows: [deletedTask],
  } = await pool.query(statement);

  return deletedTask;
};

const updateById = async (id, values, author_id) => {
  const pool = await getPool();

  const keys = Object.keys(values);
  const _assignmentList = keys
    .map((key, index) => `${key} = ${index + 3}`)
    .join(', ');
  const statement = {
    text: `UPDATE tasks SET ${_assignmentList} WHERE author_id = $2 AND id = $1 RETURNING *`,
    values: [id, author_id, ...Object.values(values)],
  };

  const {
    rows: [updatedTask],
  } = await pool.query(statement);

  return updatedTask;
};

export default { getById, getAll, create, removeById, updateById };
