require('@babel/register');
const dotenv = require('dotenv');

dotenv.config();

const { LOGGING } = process.env;
const dialect = 'postgres';

module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL',
    dialect
  },
  test: {
    use_env_variable: 'DATABASE_URL_TEST',
    logging: !!(LOGGING === 'true'),
    dialect
  },
  production: {
    use_env_variable: 'DATABASE_URL'
  }
};
