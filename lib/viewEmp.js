const mysql = require("../mysql").pool;

module.exports = {
    getEmp: function() {
        mysql.getConnection(function(err, con) {
            con.query("SELECT * FROM employee", function(err, res) {
                if (err) throw err;
                console.table(res);
                con.release();
            });
        });
    }
};
