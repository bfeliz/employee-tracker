const mysql = require("./pool");

module.exports = {
    addDepartment: function(department) {
        // add new dept to department table
        return mysql.query("INSERT INTO department SET ?", department);
    },
    addEmployee: function(employee) {
        // update the employee table with the new employee
        return mysql.query("INSERT INTO employee SET ?", employee);
    },
    addRole: function(role) {
        // get mysql connection
        return mysql.query("INSERT INTO role SET ?", role);
        // return mysql.query("SELECT * FROM department", role);
    },
    updateRole: function(employee) {
        // update the employee table with the new chosen role
        return mysql.query("UPDATE employee SET ? WHERE ?", [
            {
                role_id: employee.roleID
            },
            {
                id: employee.employeeID
            }
        ]);
    },
    getDepartments: function() {
        return mysql.query("SELECT * FROM department");
    },
    getEmployees: function() {
        return mysql.query("SELECT * FROM employee");
    },
    getEmployeesWithManagers: function() {
        return mysql.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee AS manager on manager.id = employee.manager_id;"
        );
    },
    getRoles: function(cb) {
        return mysql.query(
            "SELECT role.id, title, salary, department.department FROM role LEFT JOIN department ON role.department_id = department.id;",
            cb
        );
    }
};
