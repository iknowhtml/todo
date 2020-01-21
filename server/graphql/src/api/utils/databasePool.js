import axios from 'axios';
import { createPool } from 'slonik';

const getPool = async () => {
  let connection;

  if (process.env.ENVIRONMENT === 'development') {
    connection = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`;
  } else {
    const herokuApi = axios.create({
      baseURL: 'https://api.heroku.com/',
      headers: {
        Authorization: `Bearer ${process.env.HEROKU_API_KEY}`,
        Accept: 'application/vnd.heroku+json; version=3',
      },
    });

    const response = await herokuApi.get(
      `addons/${process.env.HEROKU_POSTGRES_ID}/config`
    );

    connection = `${response.data[0].value}?ssl=true`;
  }
  return createPool(connection);
};

export { getPool };
