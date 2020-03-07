const cTable = require("console.table");
const inquirer = require("inquirer");
const viewDept = require("./lib/viewDept");
const viewRole = require("./lib/viewRole");
const viewEmp = require("./lib/viewEmp");
const updateRole = require("./lib/updateRole");

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
                "Update Role",
                "Exit Program"
            ]
        });
        // switch statement for various actions based on prompt results
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
            case "Update Role":
                updateRole.updateRole();
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
    // startQuest();
})();
