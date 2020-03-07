const mysql = require("mysql");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "employee_db"
});

exports.pool = pool;
