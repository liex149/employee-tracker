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
          'Update An Employee Role',
          'Log Out']

        // view in table and add to the department
      }]).then((response) => {
        // this views all department in table format
        if (response.Option === 'View All Department') {
          console.log('hi');
          db.query(`SELECT * FROM department`, (err, result) => {
            if (err) throw err;
            console.table(result);
            emTracker();
          });
          // this views all roles in table format
        } else if (response.Option === 'View All Roles') {
          db.query(`SELECT * FROM employee_role`, (err, result) => {
            if (err) throw err;
            console.table(result);
            emTracker();
          });
          // this views all employee in table format
        } else if (response.Option === 'View All Employees') {
          db.query(`SELECT * FROM employee`, (err, result) => {
            if (err) throw err;
            console.table(result);
            emTracker();
          });
        } else if (response.Option === 'Add A Department') {
          inquirer.prompt([{
            type: 'input',
            name: 'department',
            message: 'What is the department name?',
          }]).then((response) => {
            db.query(`INSERT INTO department (dept_name) VALUES (?)`, [response.department], (err, result) => {
              if (err) throw err;
              console.log(`Added ${response.department} to the database.`)
              console.log(result);
              emTracker();
            }
            )
          })
        } else if (response.Option === 'Add A Role') {
          inquirer.prompt([{
            type: 'input',
            name: 'role',
            message: 'What is the role?',
          }]).then((response) => {
            db.query(`INSERT INTO employee_role (employee_title) VALUES (?)`, [response.employee_role], (err, result) => {
              if (err) throw err;
              console.log(`Added ${response.employee_role} to the database.`)
              console.log(result);
              emTracker();

            }
            )
          })
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
              type: 'input',
              name: 'manager_id',
              message: 'What is the manager_id?',
            },
          ])
          .then((response) => {
            db.query(`INSERT INTO employee (first_name, last_name, manager_id) VALUES (?, ?, ?)`, [response.first_name, response.last_name, response.manager_id], (err, result) => {
              if (err) throw err;
              console.log(`Added ${response.employee} to the database.`)
              console.log(result);
              emTracker();

            } 
            )
          })
        }
      })
}
emTracker();