const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'Smashroy1337!',
    database: 'employees_db'
  },
  console.log(`Connected to the courses_db database.`)
);

inquirer.prompt([
    {
        type: 'list',
        name: 'start',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'add a department',
            'add a role',
            'add an employee',
            'update an employee role'
        ]
    },
    
])