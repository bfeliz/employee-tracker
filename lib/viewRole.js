const mysql = require("../mysql").pool;

// function to show role data including from database table
module.exports = {
    getRole: function(cb) {
        mysql.query(
            "SELECT title, salary, department FROM role LEFT JOIN department ON role.department_id = department.id;",
            cb
        );
    }
};
