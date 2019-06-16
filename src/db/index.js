const Pool = require('pg').Pool
const pool = new Pool({
  user: 'lxhkpokesnnjvv',
  host: 'ec2-174-129-240-67.compute-1.amazonaws.com',
  database: 'd4vmmgv12polfa',
  password: '2a550f3dd426e36c8bfc7bb45c78f9849e3672292e14829241e054227ce14758',
  port: 5432,
  ssl: true
});
module.exports = pool;