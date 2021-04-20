const { Pool } = require('pg');

const PG_URI = 'postgres://wnlasfkp:j9CZ6wQgWZrCHN8H1bwTPikwgLA5OYaS@queenie.db.elephantsql.com:5432/wnlasfkp';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
