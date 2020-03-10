const inquirer = require("inquirer");

module.exports = {
    start: function() {
        return inquirer.prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View Employees",
                "View Roles",
                "View Departments",
                "Add Employee",
                "Add Role",
                "Add Department",
                "Update Role",
                "Exit Program"
            ]
        });
    },
    addDepartment: function() {
        return inquirer.prompt({
            name: "newDept",
            type: "input",
            message: "What new department do you want to add?"
        });
    },
    addEmployee: function({ roles, employees }) {
        return inquirer.prompt([
            {
                name: "first_name",
                type: "input",
                message: "What is the employee's first name?"
            },
            {
                name: "last_name",
                type: "input",
                message: "What is the employee's last name?"
            },
            {
                name: "role_id",
                type: "list",
                message: "What is the employee's role?",
                choices: function() {
                    return roles.map(role => ({
                        name: role.title,
                        value: role.id
                    }));
                }
            },
            {
                name: "manager_id",
                type: "list",
                message: "Who is the employee's manager?",
                choices: function() {
                    let none = [{ name: "None", value: 0 }];
                    return (final = [
                        ...none,
                        ...employees.map(employee => ({
                            name:
                                employee.first_name + " " + employee.last_name,
                            value: employee.id
                        }))
                    ]);
                }
            }
        ]);
    },
    addDepartment: function() {
        return inquirer.prompt({
            name: "department",
            type: "input",
            message: "What new department do you want to add?"
        });
    },
    updateRole: function({ employees, roles }) {
        return inquirer.prompt([
            {
                name: "employeeID",
                type: "list",
                message: "Which employee's role would you like to change?",
                choices: function() {
                    return employees.map(employee => ({
                        name: employee.first_name + " " + employee.last_name,
                        value: employee.id
                    }));
                }
            },
            {
                name: "roleID",
                type: "list",
                message: "What role would you like to assign them to?",
                choices: function() {
                    return roles.map(role => ({
                        name: role.title,
                        value: role.id
                    }));
                }
            }
        ]);
    },
    addRole: function(departments) {
        return inquirer.prompt([
            {
                name: "title",
                type: "input",
                message: "What new role do you want to add?"
            },
            {
                name: "salary",
                type: "input",
                message: "Please type the role salary in this format 10000.00:"
            },
            {
                name: "department_id",
                type: "list",
                message: "What department does this role fit into?",
                choices: function() {
                    return departments.map(department => ({
                        name: department.department,
                        value: department.id
                    }));
                }
            }
        ]);
    }
};
