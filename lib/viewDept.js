const mysql = require("../mysql").pool;

// function to return dept data
module.exports = {
    getDept: function() {
        mysql.getConnection(function(err, con) {
            con.query("SELECT * FROM department", function(err, res) {
                if (err) throw err;
                console.table(res);
                con.release();
            });
        });
    }
};
