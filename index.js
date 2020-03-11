require("console.table");
const db = require("./db");
const prompt = require("./lib/prompt");

(async function startQuest() {
    try {
        // begin inquirer prompt
        let start = await prompt.start();
        // switch statement for various actions based on prompt results
        switch (start.action) {
            case "View Employees":
                console.table(await db.getEmployeesWithManagers());
                break;
            case "View Employee by Manager":
                const manager = await prompt.sortManager({
                    employees: await db.getEmployees()
                });
                console.table(await db.getEmployeesByManager(manager));
                break;
            case "View Roles":
                console.table(await db.getRoles());
                break;
            case "View Departments":
                console.table(await db.getDepartments());
                break;
            case "Add Employee":
                const employee = await prompt.addEmployee({
                    roles: await db.getRoles(),
                    employees: await db.getEmployees()
                });
                await db.addEmployee(employee);
                break;
            case "Add Role":
                const departments = await db.getDepartments();
                await db.addRole(await prompt.addRole(departments));
                break;
            case "Add Department":
                await db.addDepartment(await prompt.addDepartment());
                break;
            case "Update Role":
                const updatedEmployee = await prompt.updateRole({
                    roles: await db.getRoles(),
                    employees: await db.getEmployees()
                });
                await db.updateRole(updatedEmployee);
                break;
            case "Update Manager":
                const updatedManager = await prompt.updateManager({
                    employees: await db.getEmployees()
                });
                await db.updateManager(updatedManager);
                break;
            case "Delete Department":
                const deletedDept = await db.getDepartments();
                await db.delDept(await prompt.delDept(deletedDept));
                break;
            case "Delete Role":
                const deletedRole = await db.getRoles();
                await db.delRole(await prompt.delRole(deletedRole));
                break;
            case "Delete Employee":
                const deletedEmp = await db.getEmployees();
                await db.delEmployee(await prompt.delEmployee(deletedEmp));
                break;
            case "View Department Budget":
                const budget = await db.getDepartments();
                console.table(
                    await db.getBudget(await prompt.getBudget(budget))
                );
                // console.table(await db.getBudget());
                break;
            default:
                process.exit(0);
        }
        startQuest();
    } catch (err) {
        console.log(err);
    }
})();
