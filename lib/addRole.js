const mysql = require("../mysql").pool;
const inquirer = require("inquirer");

module.exports = {
    addRole: function(cb) {
        // get mysql connection
        mysql.query("SELECT * FROM department", function(err, results) {
            if (err) throw err;
            inquirer
                .prompt([
                    {
                        name: "newRole",
                        type: "input",
                        message: "What new role do you want to add?"
                    },
                    {
                        name: "salary",
                        type: "input",
                        message:
                            "Please type the role salary in this format 10000.00:"
                    },
                    {
                        name: "department",
                        type: "rawlist",
                        message: "What department does this role fit into?",
                        choices: function() {
                            let choiceArray = [];
                            for (let i = 0; i < results.length; i++) {
                                choiceArray.push(results[i].department);
                            }
                            return choiceArray;
                        }
                    }
                ])
                .then(function(answer) {
                    let chosenDept;
                    for (let i = 0; i < results.length; i++) {
                        if (results[i].department === answer.department) {
                            chosenDept = results[i].id;
                        }
                    }
                    // add new dept to department table
                    mysql.query(
                        "INSERT INTO role SET ?",
                        {
                            title: answer.newRole,
                            salary: answer.salary,
                            department_id: chosenDept
                        },
                        cb
                    );
                });
        });
    }
};
