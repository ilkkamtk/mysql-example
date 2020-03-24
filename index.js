'use strict';
const express = require('express');
const app = express();
const port = 3000;
const pool = require('./database/db');

app.get('/test', async (req, res) => {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM table');
    console.log('rows', rows);
    console.log('fields', fields);
    res.json(rows);
  }
  catch (err) {
    console.log(err);
    res.send(err.message);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
