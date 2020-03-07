const mysql = require("mysql");

// info to create data pool
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "employee_db"
});

exports.pool = pool;
