'use strict';

module.exports = {
  serviceName: process.env.SERVICE_NAME || 'microservice-base-template',
  env: process.env.NODE_ENV || 'development',
  server: {
    host: process.env.HOST || '0.0.0.0',
    port: parseInt(process.env.PORT, 10) || 3000,
  },
};
