const cTable = require("console.table");
const inquirer = require("inquirer");
const viewDept = require("./lib/viewDept");
const viewRole = require("./lib/viewRole");
const viewEmp = require("./lib/viewEmp");
const updateRole = require("./lib/updateRole");
const addDepart = require("./lib/addDept");
const addRole = require("./lib/addRole");
const addEm = require("./lib/addEmp");

(async function startQuest() {
    try {
        // begin inquirer prompt
        let start = await inquirer.prompt({
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
        // switch statement for various actions based on prompt results
        switch (start.action) {
            case "View Employees":
                viewEmp.getEmp(function(err, res) {
                    if (err) throw err;
                    console.table(res);
                    startQuest();
                });
                break;
            case "View Roles":
                viewRole.getRole(function(err, res) {
                    if (err) throw err;
                    console.table(res);
                    startQuest();
                });
                break;
            case "View Departments":
                viewDept.getDept(function(err, res) {
                    if (err) throw err;
                    console.table(res);
                    startQuest();
                });
                break;
            case "Add Employee":
                addEm.addEmployee(function(err, res) {
                    if (err) throw err;
                    console.log("Employee added");
                    startQuest();
                });
                break;
            case "Add Role":
                addRole.addRole(function(err, res) {
                    if (err) throw err;
                    console.log("New role added");
                    startQuest();
                });
                break;
            case "Add Department":
                addDepart.addDepartment(function(err, res) {
                    if (err) throw err;
                    console.log("New department added");
                    startQuest();
                });
                break;
            case "Update Role":
                updateRole.updateRole(function(err, res) {
                    if (err) throw err;
                    console.log("Role updated");
                    startQuest();
                });
                break;
            case "Exit Program":
                process.exit(0);
            default:
                startQuest();
                break;
        }
    } catch (err) {
        console.log(err);
    }
})();
