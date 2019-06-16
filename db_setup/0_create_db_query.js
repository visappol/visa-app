const db = require("../src/db");

const create_db_query = (request, response) => {
    db.query(`CREATE TABLE db_query (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        query VARCHAR(1000)
      );`, (error, results) => {
      if (error) {
        console.log(error);
        throw error
      }
      console.log(results);
    })
  }
  create_db_query();