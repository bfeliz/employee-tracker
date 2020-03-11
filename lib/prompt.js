const inquirer = require("inquirer");

module.exports = {
    start: function() {
        return inquirer.prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View Employees",
                "View Employee by Manager",
                "View Roles",
                "View Departments",
                "Add Employee",
                "Add Role",
                "Add Department",
                "Update Role",
                "Update Manager",
                "Delete Department",
                "Delete Role",
                "Delete Employee",
                "View Department Budget",
                "Exit Program"
            ]
        });
    },
    getBudget: function(departments) {
        return inquirer.prompt({
            name: "role",
            type: "list",
            message: "Which department do you want to see the budget for?",
            choices: function() {
                return departments.map(department => ({
                    name: department.department,
                    value: department.id
                }));
            }
        });
    },
    delDept: function(departments) {
        return inquirer.prompt({
            name: "name",
            type: "list",
            message: "Which department do you want to delete?",
            choices: function() {
                return departments.map(department => ({
                    name: department.department,
                    value: department.id
                }));
            }
        });
    },
    delRole: function(roles) {
        return inquirer.prompt({
            name: "name",
            type: "list",
            message: "Which role do you want to delete?",
            choices: function() {
                return roles.map(role => ({
                    name: role.title,
                    value: role.id
                }));
            }
        });
    },
    delEmployee: function(employees) {
        return inquirer.prompt({
            name: "name",
            type: "list",
            message: "Which employee do you want to delete?",
            choices: function() {
                return employees.map(employee => ({
                    name: employee.first_name + " " + employee.last_name,
                    value: employee.id
                }));
            }
        });
    },
    sortManager: function({ employees }) {
        return inquirer.prompt({
            name: "managerName",
            type: "list",
            message: "Which manager do you want to sort by?",
            choices: function() {
                return employees.map(employee => ({
                    name: employee.first_name + " " + employee.last_name,
                    value: employee.id
                }));
            }
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
    updateManager: function({ employees }) {
        return inquirer.prompt([
            {
                name: "employeeID",
                type: "list",
                message: "Which employee's manager do you want to change?",
                choices: function() {
                    return employees.map(employee => ({
                        name: employee.first_name + " " + employee.last_name,
                        value: employee.id
                    }));
                }
            },
            {
                name: "managerID",
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
