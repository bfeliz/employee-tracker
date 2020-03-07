const mysql = require("../mysql").pool;

module.exports = {
    getRole: function() {
        mysql.getConnection(function(err, con) {
            con.query("SELECT * FROM role", function(err, res) {
                if (err) throw err;
                console.table(res);
                con.release();
            });
        });
    }
};
