'use strict';

require('dotenv').config();

const app = require('./app');
const config = require('./config');

const { port, host } = config.server;

app.listen(port, host, () => {
  console.log(`Service "${config.serviceName}" running on http://${host}:${port}`);
});
