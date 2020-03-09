const mysql = require("../mysql").pool;

// function to view employee data including from other two tables
module.exports = {
    getEmp: function(cb) {
        mysql.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee AS manager on manager.id = employee.manager_id;",
            cb
        );
    }
};
