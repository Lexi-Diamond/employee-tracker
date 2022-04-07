const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password123",
  database: "employee_db"
});

function mainMenu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'menuOptions',
            message: 'Pick an Option',
            choices: [
                "View all Departments",
                "view all Roles",
                "View all Employees",
                "Add Deplartment",
                "Add Role",
                "Add Employee",
                "Update Employee Role"
            ]
        }
    ])
}
