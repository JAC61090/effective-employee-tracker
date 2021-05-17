const inquirer = require('inquirer');
consoleTtable = require('console.table');
const connection = require('./connection');
var mysql = require("mysql");

// create the connection information for the sql database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'rootroot',
    database: 'teamMember_DB',
});


// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});


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
              break;

          case updateOptions[4]:
              connection.end();
              break
       }
    })
}

function departmentView() {
  let sqlStr = "SELECT * FROM department_";
  connection.query(sqlStr, function (err, result) {
    if (err) throw err;

    console.table(result)
    runSearch();
  })
}

function employeeView () {
  let sqlStr = "SELECT first_name, last_name, title, salary FROM employee ";
  sqlStr += "LEFT JOIN role ";
  sqlStr += "ON employee.role_id = role.id"
  connection.query(sqlStr, function (err, result) {
    if (err) throw err;

    console.table(result)
    runSearch();
  })
}

function roleView() {
  let sqlStr = "SELECT * FROM role";
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