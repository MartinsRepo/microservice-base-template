'use strict';

const config = require('../config');

const getStatus = () => ({
  status: 'ok',
  service: config.serviceName,
  timestamp: new Date().toISOString(),
  uptime: process.uptime(),
});

module.exports = { getStatus };
