const { Client } = require('pg');

const con = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: 'tboy',
  database: 'trialdb'
});

con.connect().then(console.log('conncted to the database')); // ✅ You must connect to PostgreSQL

module.exports = con;
