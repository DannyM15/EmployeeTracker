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
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role'
        ]
    },
    {
      type: 'input',
      name: 'AddDept',
      message: 'What is the name of the department?',
      when: (answer) => answers.start === 'Add a department'
    },    
    {
      type: 'input',
      name: 'AddRole',
      message: 'What is the name of the role?',
      when: (answer) => answer.start === 'Add a role',
    },
    {
      type: 'input',
      name: 'AddEmployee1',
      message: 'What is the first name of the employee?',
      when: (answer) => answer.start === 'Add an employee',
    },
    {
      type: 'input',
      name: 'AddEmployee2',
      message: 'What is the last name of the employee?',
      when: (answer) => answer.start === 'Add an employee',
    },
    {
      type: 'input',
      name: 'AddEmployee3',
      message: 'What is the role of the employee?',
      when: (answer) => answer.start === 'Add an employee',
    }
])
.then((data) => {
  if(data.start === 'View all departments'){
    db.query('SELET * FROM deparments', (error, results) =>{
      if (error) {
        console.error(error);
      }
      else {
        console.log(results);
      }
    })
  }
  if(data.start === 'View all roles'){
    db.query('SELECT * FROM roles', (error, results) =>{
      if (error) {
        console.error(error);
      }
      else {
        console.log(results);
      }
    })
  }
  if(data.start === 'View all employees'){
    db.query('SELECT * FROM employees', (error, results) =>{
      if (error) {
        console.error(error);
      }
      else {
        console.log(results);
      }
    })
  }
  if(data.start === 'add a department'){
    db.query('INSERT INTO departments VALUES ', results, (error, results) =>{
      if (error) {
        console.error(error);
      }
      else {
        console.log(results + ' added to deparments');
      }
    })
  }
  if(data.start === 'add a role'){
    db.query('INSERT INTO roles VALUES ', results, (error, results) =>{
      if (error) {
        console.error(error);
      }
      else {
        console.log(results + ' added to roles');
      }
    })
  }
  if(data.start === 'add an employee'){

  }
  if(data.start === 'update an employee role'){

  }
})

