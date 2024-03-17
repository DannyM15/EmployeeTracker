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
    
])