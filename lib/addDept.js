const mysql = require("../mysql").pool;
const inquirer = require("inquirer");

module.exports = {
    addDepartment: function(cb) {
        inquirer
            .prompt({
                name: "newDept",
                type: "input",
                message: "What new department do you want to add?"
            })
            .then(function(answer) {
                // add new dept to department table
                mysql.query(
                    "INSERT INTO department SET ?",
                    {
                        department: answer.newDept
                    },
                    cb
                );
            });
    }
};
