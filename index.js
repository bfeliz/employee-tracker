const cTable = require("console.table");
const inquirer = require("inquirer");
const viewDept = require("./lib/viewDept");
const viewRole = require("./lib/viewRole");
const viewEmp = require("./lib/viewEmp");

(async function startQuest() {
    try {
        let start = await inquirer.prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View Employees",
                "View Roles",
                "View Departments",
                "Exit Program"
            ]
        });
        switch (start.action) {
            case "View Employees":
                viewEmp.getEmp();
                break;
            case "View Roles":
                viewRole.getRole();
                break;
            case "View Departments":
                viewDept.getDept();
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
    startQuest();
})();
