const mysql = require("../mysql").pool;
const inquirer = require("inquirer");

module.exports = {
    updateRole: function() {
        // get mysql connection
        mysql.getConnection(function(err, con) {
            // get employee data from employee table for prompt
            con.query("SELECT * FROM employee", function(err, results) {
                if (err) throw err;
                inquirer
                    .prompt([
                        {
                            name: "choice",
                            type: "rawlist",
                            message:
                                "Which employee's role would you like to change?",
                            choices: function() {
                                let choiceArray = [];
                                for (let i = 0; i < results.length; i++) {
                                    choiceArray.push(results[i].first_name);
                                }
                                return choiceArray;
                            }
                        }
                    ])
                    // get the chosen employee name
                    .then(function(answer) {
                        let chosenEmployee;
                        for (let i = 0; i < results.length; i++) {
                            if (results[i].first_name === answer.choice) {
                                chosenEmployee = results[i];
                            }
                        }
                        // get role data from role table for prompt
                        con.query("SELECT * FROM role", function(err, input) {
                            if (err) throw err;
                            inquirer
                                .prompt([
                                    {
                                        name: "role",
                                        type: "rawlist",
                                        message:
                                            "What role would you like to assign them to?",
                                        choices: function() {
                                            let roleArray = [];
                                            for (
                                                let i = 0;
                                                i < input.length;
                                                i++
                                            ) {
                                                roleArray.push(input[i].title);
                                            }
                                            return roleArray;
                                        }
                                    }
                                ])
                                // get the chosen role
                                .then(function(roleAnswer) {
                                    let chosenRole;
                                    for (let j = 0; j < input.length; j++) {
                                        if (
                                            roleAnswer.role === input[j].title
                                        ) {
                                            chosenRole = input[j].id;
                                            // update the employee table with the new chosen role
                                            con.query(
                                                "UPDATE employee SET ? WHERE ?",
                                                [
                                                    {
                                                        role_id: chosenRole
                                                    },
                                                    {
                                                        first_name:
                                                            chosenEmployee.first_name
                                                    }
                                                ],
                                                function(err, res) {
                                                    if (err) throw err;
                                                    console.log("Role updated");
                                                }
                                            );
                                        }
                                    }
                                });
                        });
                    });
            });
        });
    }
};
