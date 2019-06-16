const db = require("./db");

const insert_db_query = async (name, email, query) => {
  return await db.query(`INSERT INTO db_query (name, email, query) VALUES(
      '${name}', '${email}', '${query}'
    );`);
}

const select_db_query = async () => {
  let result = await db.query(`SELECT * FROM db_query`);
  return result.rows;
}

const delete_db_query = async (id) => {
  return await db.query(`DELETE FROM db_query WHERE id=${id}`);
}

module.exports = {
  insert: insert_db_query,
  select: select_db_query,
  delete: delete_db_query
}