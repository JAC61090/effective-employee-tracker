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

