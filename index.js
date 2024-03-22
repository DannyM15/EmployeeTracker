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
// list fucntions to be available as choices inside the prompts
let namesList
let deptList
let roleList

// queries to create the list functions. 
db.query('SELECT id, CONCAT(first_name, " ", last_name) AS full_name FROM employees', (err, results) => {
  if (err) {
    console.error('Error fetching names from database:', err);
    return;
  }

  namesList = results.map((row) => ({
      name: row.full_name,
      value: row.id
  }));

  // Each query is nested inside another to be available in the prompts
  db.query('SELECT id, department_name FROM departments', (err, results) => {
    if (err) {
      console.error('Error fetching departments from database:', err);
      return;
    }
    deptList = results.map((row) => ({
      name: row.id,
      value: row.name
    }));

    db.query('SELECT id, role_name FROM roles', (err, results) => {
      if (err) {
        console.error('Error fetching departments from database:', err);
        return;
      }
      roleList = results.map((row) => ({
        name: row.role_name,
        value: row.id
      }));

      // Inquierer prompts for the employee menu. 
      // Using the "when" property to determine what follow up questions are asked if needed.
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
            type: 'list',
            name: 'AddRole2',
            message: 'Which department does the role belong to?',
            choices: deptList,
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
            type: 'list',
            name: 'AddEmployee3',
            message: 'What is the role of the employee?',
            choices: roleList,
            when: (answer) => answer.start === 'Add an employee',
          },
          {
            type: 'list',
            name: 'updateEmp1',
            message: 'Who would you like to update?',
            choices: namesList,
            when: (answer) => answer.start === 'Update an employee role',
          },
          {
            type: 'list',
            name: 'updateEmp2',
            message: 'To which role would you like to update to?',
            choices: roleList,
            when: (answer) => answer.start === 'Update an employee role',
          },

        ])
          // if statements with a different query depending on which option was selected at the start
          // console.log to display what was added or changed
          // console.table used to display the results if asking for all of a subject
          // dont forget to check out the exit message
          .then((data) => {
            if (data.start === 'Add a department') {
              db.query('INSERT INTO departments (department_name) VALUES (?) ', [data.AddDept], (error, results) => {
                if (error) {
                  console.error(error);
                }
                else {
                  console.log(data.AddDept + ' Added to departments');
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
              db.query('INSERT INTO roles (role_name, department_id, salary) VALUES (?,?,?) ', [data.AddRole1, data.AddRole2, data.AddRole3], (error, results) => {
                if (error) {
                  console.error(error);
                }
                else {
                  console.table(data.AddRole1 + ' added as a role');
                  prompt();
                }
              })
            }
            if (data.start === 'Add an employee') {
              db.query('INSERT INTO employees (first_name, last_name, role_id) VALUES (?,?,?) ', [data.AddEmployee1, data.AddEmployee2, data.AddEmployee3], (error, results) => {
                if (error) {
                  console.error(error);
                }
                else {
                  console.log(data.AddEmployee1 + ' ' + data.AddEmployee2 + ' added as an employee');
                  prompt();
                }
              })
            }
            if (data.start === 'Update an employee role') {

              db.query('UPDATE employees SET role_id = (?) WHERE id = (?) ', [data.updateEmp2, data.updateEmp1], (error, results) => {
                if (error) {
                  console.error(error);
                }
                else {
                  console.log('Employee role udpated to ' + data.updateEmp2);
                  prompt();
                }
              })
            }
            if (data.start === 'Exit') {
              console.log('"Heres looking at you, kid"')
            }
          })
      }
         prompt();

    }) 
  })
})
