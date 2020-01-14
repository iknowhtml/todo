import knex from 'knex';

const baseConfig = {
  client: 'pg',
  version: '7.17.1',
};

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
  const productionConfig = {};
  config = { ...baseConfig, ...productionConfig };
}

const client = knex(config);

export default client;
