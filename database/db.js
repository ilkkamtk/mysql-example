'use strict';
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost', // if you use vpn: mysql.metropolia.fi
  port: XXXX, // by default 3306
  user: 'omaUsername',
  password: 'dbPassword',
  database: 'omaUsername',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
