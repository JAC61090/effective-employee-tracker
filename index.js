const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTtable = require('console.table');

const viewOptions = [
  "View Departments",
  "View Roles",
  "View Employees",
  "Update Employee",
  "exit"
];

const employeeOptions = [
  "Steve Colt",
  "Marco Kane",
  "Hank Ghille",
  "Jesk Hightower",
  "Greg Gribble",
  "Richard Jackson",
  "Dwayne Green",
  "Hannibal Collins",
  "Tim Murdock",
  "exit"
];

const updateOptions = [
  "First Name",
  "Last Name",
  "Role",
  "exit"
];

runSearch();

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What action would you like?",
      choices: viewOptions
    })
    .then(function (answer) {
      switch (answer.action) {
          case viewOptions[0]:
              departmentView();
              break;

          case viewOptions[1]:
              roleView();
              break;

          case viewOptions[2]:
              employeeView();
              break;

          case viewOptions[3]:
              updateEmployee();

          case updateOptions[4]:
              connection.end();
              break
       }
    })
}

