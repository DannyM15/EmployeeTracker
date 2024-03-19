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


const prompt = () => {

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
        'Update an employee role',
        'Exit'
      ]
    },
    {
      type: 'input',
      name: 'AddDept',
      message: 'What is the name of the department?',
      when: (answer) => answer.start === 'Add a department'
    },
    {
      type: 'input',
      name: 'AddRole1',
      message: 'What is the name of the role?',
      when: (answer) => answer.start === 'Add a role',
    },
    {
      type: 'input',
      name: 'AddRole2',
      message: 'Which department does the role belong to?',
      when: (answer) => answer.start === 'Add a role',
    },
    {
      type: 'input',
      name: 'AddRole3',
      message: 'What is the Salary for the role?',
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
    },
    {
      type: 'list',
      name: 'updateEmp',
      message: 'Who would you like to update?',
      choices: db.employees,
      when: (answer) => answer.start === 'Update an employee role',
    }
  ])

    .then((data) => {
      if (data.start === 'Add a department') {
        db.query('INSERT INTO departments (department_name) VALUES (?) ', [data.AddDept], (error, results) => {
          if (error) {
            console.error(error);
          }
          else {
            console.table(results);
            prompt();
          }
        })
      }
      if (data.start === 'View all departments') {
        db.query('SELECT * FROM departments', (error, results) => {
          if (error) {
            console.error(error);
          }
          else {
            console.table(results);
            prompt();
          }
        })
      }
      if (data.start === 'View all roles') {
        db.query('SELECT * FROM roles', (error, results) => {
          if (error) {
            console.error(error);
          }
          else {
            console.table(results);
            prompt();
          }
        })
      }
      if (data.start === 'View all employees') {
        db.query('SELECT * FROM employees', (error, results) => {
          if (error) {
            console.error(error);
          }
          else {
            console.table(results);
            prompt();

          }
        })
      }
      if (data.start === 'Add a role') {
        db.query('INSERT INTO roles (role_name, department_id, salary) VALUES (?) ', [data.AddRole1, data.AddRole2, data.AddRole3], (error, results) => {
          if (error) {
            console.error(error);
          }
          else {
            console.table(results);
            prompt();
          }
        })
      }
      if (data.start === 'Add an employee') {
        db.query('INSERT INTO employees (first_name, last_name, role_id) VALUES (?) ', [data.AddEmployee1, data.AddEmployee2, data.AddEmployee3], (error, results) => {
          if (error) {
            console.error(error);
          }
          else {
            console.table(results);
            prompt();
          }
        })
      }
      if (data.start === 'Update an employee role') {
        db.query('UPDATE  ', results, (error, results) => {
          if (error) {
            console.error(error);
          }
          else {
            console.log(results + ' added to roles');

          }
        })
      }
      if (data.start === 'Exit') {
        console.log('"Heres looking at you, kid"')
      }
    })
}

prompt();