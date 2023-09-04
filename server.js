const inquirer = require('inquirer');
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const fs = require('fs');

const database = mysql
  .createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: "company_db",
  })
  .promise();

//this is where you write your query
const choicesRole = async () => {
  const roleQuery = `SELECT id AS value, employee_title AS name FROM employee_role`;
  const roles = await database.query(roleQuery);
  console.log(roles[0])
  return roles[0];
};
const choicesDPT = async () => {
  const departmentQuery = `SELECT id AS value, dept_name AS name FROM department`;
  const departments = await database.query(departmentQuery);
  console.log(departments[0])
  return departments[0];
};
const choicesManager = async () => {
  const ManagerQuery = `SELECT id AS value, first_name, last_name AS name FROM employee`;
  const Managers = await database.query(ManagerQuery);
  console.log(Managers[0])
  return Managers[0];
};


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: '',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);
db.query(`SELECT * from department`)
const emTracker = function () {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Please pick an option:',
        name: 'Option',
        choices: [
          'View All Department',
          'View All Roles',
          'View All Employees',
          'Add A Department',
          'Add A Role',
          'Add An Employee',
          'Update An Employee Role']

        // view in table and add to the department
      }]).then((response) => {
        // formatted table showing department names and department ids
        if (response.Option === 'View All Department') {
          db.query(`SELECT * FROM department`, (err, result) => {
            if (err) throw err;
            console.table(result);
            emTracker();
          });
          // formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
        } else if (response.Option === 'View All Roles') {
          db.query(`SELECT * FROM employee_role`, (err, result) => {
            if (err) throw err;
            console.table(result);
            emTracker();
          });
          // present with the job title, role id, the department that role belongs to, and the salary for that role
        } else if (response.Option === 'View All Employees') {
          db.query(`SELECT * FROM employee`, (err, result) => {
            if (err) throw err;
            console.table(result);
            emTracker();
          });
          // this adds a department
        } else if (response.Option === 'Add A Department') {
          inquirer.prompt([{
            type: 'input',
            name: 'department',
            message: 'What is the department name?',
          }]).then((response) => {
            db.query(`INSERT INTO department (dept_name) VALUES (?)`, [response.department], (err, result) => {
              if (err) throw err;
              console.log('role added');
              emTracker();
            })
          })
          // this adds the name, salary, and department for the role
        } else if (response.Option === 'Add A Role') {
          inquirer.prompt([{
            type: 'input',
            name: 'role',
            message: 'What is the employee role?',
          },
          {
            type: 'input',
            name: 'salary',
            message: 'What is the salary for that role?',
          },
          {
            type: 'list',
            name: 'department_belong',
            message: 'Which department does it belong to?',
            choices: async () => await choicesDPT(),
          }
          ]).then((response) => {
            db.query(`INSERT INTO employee_role (employee_title, employee_salary, department_id) VALUES (?, ?, ?)`, [response.role, response.salary, response.department_belong], (err, result) => {
              if (err) throw err;
          console.log('role added');
              emTracker();

            })
          })


          // this adds the employee’s first name, last name, role, and manager
        } else if (response.Option === 'Add An Employee') {
          inquirer.prompt([
            {
              type: 'input',
              name: 'first_name',
              message: 'What is the first_name?',
            },
            {
              type: 'input',
              name: 'last_name',
              message: 'What is the last_name?',
            },
            {
              type: 'list',
              name: 'role',
              message: 'What is the employee role?',
              choices: async () => await choicesRole(),
            },
            {
              type: 'input',
              name: 'manager',
              message: 'Who is the manager?',
              choices: async () => await choicesManager(),
            },
          ])
            .then((response) => {
              db.query(`INSERT INTO employee (first_name, last_name, role, manager_id) VALUES (?, ?, ?, ?)`, [response.first_name, response.last_name, response.role, response.manager], (err, result) => {
                if (err) throw err;
                HTMLFormControlsCollection.log('added');
                emTracker();

              }
              )
            })
        }
      })
}

emTracker();