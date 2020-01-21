import { sql } from 'slonik';
import bcrypt from 'bcrypt';
import { getPool } from '../utils/databasePool';

const getIdByUsername = async username => {
  const pool = await getPool();
  const {
    rows: [{ id }],
  } = await pool.query(sql`SELECT id FROM users WHERE username=${username}`);

  return id;
};

const validate = async (username, password) => {
  const pool = await getPool();
  const {
    rows: [{ password_hash }],
  } = await pool.query(
    sql`SELECT password_hash FROM users WHERE username = ${username}`
  );

  return bcrypt.compare(password, password_hash);
};

export default { validate, getIdByUsername };
