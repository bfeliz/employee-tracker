const cTable = require("console.table");
const inquirer = require("inquirer");
const viewDept = require("./lib/viewDept");
const viewRole = require("./lib/viewRole");
const viewEmp = require("./lib/viewEmp");

viewDept.getDept();
viewRole.getRole();
viewEmp.getEmp();
