import knex from 'knex';
import axios from 'axios';

const baseConfig = {
  client: 'pg',
};

const connect = async () => {
  let config;
  if (process.env.ENVIRONMENT === 'development') {
    const developmentConfig = {
      connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      },
    };

    config = { ...baseConfig, ...developmentConfig };
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

    const productionConfig = {
      connection: `${response.data[0].value}?ssl=true`,
    };

    config = { ...baseConfig, ...productionConfig };
  }

  const client = knex(config);

  return client;
};

export default { connect };
