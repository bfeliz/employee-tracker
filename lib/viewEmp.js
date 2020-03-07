const mysql = require("../mysql").pool;

module.exports = {
    getEmp: function() {
        mysql.getConnection(function(err, con) {
            con.query(
                "SELECT first_name, last_name, title, salary, department FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id;",
                function(err, res) {
                    if (err) throw err;
                    console.log("\n");
                    console.table(res);
                    con.release();
                }
            );
        });
    }
};
