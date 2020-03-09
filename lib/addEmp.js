const mysql = require("../mysql").pool;
const inquirer = require("inquirer");

module.exports = {
    addEmployee: function(cb) {
        mysql.query("SELECT * FROM role", function(err, results) {
            if (err) throw err;
            inquirer
                .prompt([
                    {
                        name: "fName",
                        type: "input",
                        message: "What is the employee's first name?"
                    },
                    {
                        name: "lName",
                        type: "input",
                        message: "What is the employee's last name?"
                    },
                    {
                        name: "role",
                        type: "rawlist",
                        message: "What is the employee's role?",
                        choices: function() {
                            let choiceArray = [];
                            for (let i = 0; i < results.length; i++) {
                                choiceArray.push(results[i].title);
                            }
                            return choiceArray;
                        }
                    }
                ])
                .then(function(answer) {
                    let chosenRole;
                    for (let i = 0; i < results.length; i++) {
                        if (results[i].title === answer.role) {
                            chosenRole = results[i].id;
                        }
                    }
                    mysql.query("SELECT * FROM employee", function(err, input) {
                        if (err) throw err;
                        inquirer
                            .prompt([
                                {
                                    name: "manager",
                                    type: "rawlist",
                                    message: "Who is the employee's manager?",
                                    choices: function() {
                                        let roleArray = ["None"];
                                        for (let i = 0; i < input.length; i++) {
                                            roleArray.push(
                                                input[i].first_name +
                                                    " " +
                                                    input[i].last_name
                                            );
                                        }
                                        return roleArray;
                                    }
                                }
                            ])
                            .then(function(managerAnswer) {
                                let chosenManager;
                                for (let j = 0; j < input.length; j++) {
                                    if (
                                        managerAnswer.manager ===
                                        input[j].first_name +
                                            " " +
                                            input[j].last_name
                                    ) {
                                        chosenManager = input[j].id;
                                    } else if (answer.role === "None") {
                                        chosenManager = null;
                                    }
                                }
                                // update the employee table with the new employee
                                mysql.query(
                                    "INSERT INTO employee SET ?",
                                    [
                                        {
                                            first_name: answer.fName,
                                            last_name: answer.lName,
                                            role_id: chosenRole,
                                            manager_id: chosenManager
                                        }
                                    ],
                                    cb
                                );
                            });
                    });
                });
        });
    }
};
