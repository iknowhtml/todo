import bcrypt from 'bcrypt';
import { getPool } from '../utils/databasePool';

const getIdByUsername = async username => {
  const pool = await getPool();
  const statement = {
    text: 'SELECT id FROM users WHERE username = $1',
    values: [username],
  };
  const {
    rows: [{ id }],
  } = await pool.query(statement);

  return id;
};

const validate = async (username, password) => {
  const pool = await getPool();
  const statement = {
    text: 'SELECT password_hash FROM users WHERE username = $1',
    values: [username],
  };
  const {
    rows: [{ password_hash }],
  } = await pool.query(statement);

  return bcrypt.compare(password, password_hash);
};

export default { validate, getIdByUsername };
