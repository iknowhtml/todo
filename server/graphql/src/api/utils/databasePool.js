import { Pool } from 'pg';

const getPool = async () => {
  let configuration;

  if (process.env.ENVIRONMENT === 'development') {
    configuration = {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
    };
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

    connectionString = `${response.data[0].value}?ssl=true`;

    configuration = { connectionString };
  }

  return new Pool(configuration);
};

export { getPool };
