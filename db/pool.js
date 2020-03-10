const mysql = require("mysql");
const util = require("util");

// info to create data pool
const pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee_db"
});

pool.query = util.promisify(pool.query);

module.exports = pool;
