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


