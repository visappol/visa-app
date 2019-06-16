const Pool = require('pg').Pool
const pool = new Pool({
  user: 'lxhkpokesnnjvv',
  host: 'ec2-174-129-240-67.compute-1.amazonaws.com',
  database: 'd4vmmgv12polfa',
  password: '2a550f3dd426e36c8bfc7bb45c78f9849e3672292e14829241e054227ce14758',
  port: 5432,
  ssl: true
})
const create_db_query = (request, response) => {
    pool.query(`CREATE TABLE db_query (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        query VARCHAR(1000)
      );`, (error, results) => {
      if (error) {
        throw error
      }
      console.log(results);
    })
  }
  create_db_query();