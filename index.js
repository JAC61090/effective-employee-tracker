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

function departmentView() {
  var sqlStr = "SELECT * FROM department";
  connection.query(sqlStr, function (err, result) {
    if (err) throw err;

    console.table(result)
    runSearch();
  })
}

function employeeView() {
  var sqlStr = "SELECT first_name, last_name, title, salary FROM employee ";
  sqlStr += "LEFT JOIN role ";
  sqlStr += "ON employee.role_id = role.id"
  connection.query(sqlStr, function (err, result) {
    if (err) throw err;

    console.table(result)
    runSearch();
  })
}

function roleView() {
  var sqlStr = "SELECT * FROM role";
  connection.query(sqlStr, function (err, result) {
    if (err) throw err;

    console.table(result)
    runSearch();
  })
}

const updateEmployee = () => {

    function runUpdateSearch() {
      inquirer
        .prompt({
          name: "action",
          type: "list",
          message: "which employee would you like to update",
          choices: employeeOptions
        })

    }
    runUpdateSearch();
}