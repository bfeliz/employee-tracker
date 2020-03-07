const mysql = require("../mysql").pool;

module.exports = {
    getRole: function() {
        mysql.getConnection(function(err, con) {
            con.query(
                "SELECT title, salary, department FROM role LEFT JOIN department ON role.department_id = department.id;",
                function(err, res) {
                    if (err) throw err;
                    console.table(res);
                    con.release();
                }
            );
        });
    }
};
