const mysql = require("../mysql").pool;
const inquirer = require("inquirer");

module.exports = {
    addDepartment: function() {
        // get mysql connection
        mysql.getConnection(function(err, con) {
            inquirer
                .prompt({
                    name: "newDept",
                    type: "input",
                    message: "What new department do you want to add?"
                })
                .then(function(answer) {
                    // add new dept to department table
                    con.query(
                        "INSERT INTO department SET ?",
                        {
                            department: answer.newDept
                        },
                        function(err, res) {
                            if (err) throw err;
                            console.log("New department added");
                        }
                    );
                });
        });
    }
};
