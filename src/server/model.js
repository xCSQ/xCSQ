const { Pool } = require('pg');
// pooling from new database
const PG_URI = 'postgres://dzqpvcyr:zqsW45jOC8wEWIkvHacoLUDRzJ0a9brn@isilo.db.elephantsql.com:5432/dzqpvcyr';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => (
    pool.query(text, params, callback)),
};
