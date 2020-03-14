import dotenv from 'dotenv';

dotenv.config();

const { APP_BASE_URL } = process.env;

export default {
  swagger: '2.0',
  info: {
    description: `Welcome to the documentation of Template API. The base url for working with this api is ${APP_BASE_URL}/api`,
    version: '1.0.0',
    title: 'Template API',
    contact: {
      name: 'Template',
      url: 'https://github.com/okoroemeka/server-template'
    },
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT'
    }
  },
  host: APP_BASE_URL,
  basePath: '/api',
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'users',
      description: 'The users of Template'
    },
  ],
  schemes: ['https', 'http'],
  paths: {}
};
