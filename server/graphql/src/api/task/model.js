import { sql } from 'slonik';
import { getPool } from '../utils/databasePool';

const getById = async (id, author_id) => {
  const pool = await getPool();
  const {
    rows: [task],
  } = await pool.query(
    sql`SELECT * FROM tasks WHERE id = ${id} AND author_id = ${author_id}`
  );
  return task;
};
const getAll = async author_id => {
  const pool = await getPool();
  const { rows: tasks } = await pool.query(
    sql`SELECT * FROM tasks WHERE author_id = ${author_id}`
  );
  return tasks;
};

const create = async (name, author_id) => {
  const pool = await getPool();
  const {
    rows: [createdTask],
  } = await pool.query(
    sql`INSERT INTO tasks (name, author_id) VALUES (${name}, ${author_id}) RETURNING *`
  );

  return createdTask;
};

const removeById = async (id, author_id) => {
  const pool = await getPool();
  const {
    rows: [deletedTask],
  } = await pool.query(
    sql`DELETE FROM tasks WHERE id = ${id} AND author_id = ${author_id} RETURNING *`
  );

  return deletedTask;
};

const updateById = async (id, values, author_id) => {
  const pool = await getPool();

  const entries = Object.entries(values);
  const assignments = entries.map(
    ([column, value]) => sql`${sql.identifier([column])} = ${value}`
  );
  const assignmentsList = sql.join(assignments, ', ');

  const {
    rows: [updatedTask],
  } = await pool.query(
    sql`UPDATE tasks SET ${assignmentsList} WHERE id = ${id} AND author_id = ${author_id} RETURNING *`
  );

  return updatedTask;
};

export default { getById, getAll, create, removeById, updateById };
