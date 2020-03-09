const mysql = require("../mysql").pool;

// function to return dept data
module.exports = {
    getDept: function(cb) {
        mysql.query("SELECT * FROM department", cb);
    }
};
