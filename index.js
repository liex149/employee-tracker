// let emTracker = function () {
//     inquirer
//         .prompt([
//             {
//                 type: 'list',
//                 message: 'Please pick an option:',
//                 name: 'Option',
//                 choices: ['View All Department', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role', 'Log Out']
                
//             }]).then((response) => {
//           if (response.prompt === 'View All Department') {
            
//             db.query(`SELECT * from department`, (err, result) => {
//               if (err) throw err;
//             })
//           }
//         }) 
//         emTracker();
// };


// // read departments
// app.get('/api/department', (req, res) => {
//   const sql = `SELECT id, dept_name FROM department`;

//   db.query(sql, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: rows
//     });
//   });
// });

// // // Create a dept
// app.post('/api/department', ({ body }, res) => {
//   const sql = `INSERT INTO department (dept_name)
//       VALUES (?)`;
//   const params = [body.dept_name];

//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: body
//     });
//   });
// });

// // // Delete a department
// app.delete('/api/department/:id', (req, res) => {
//   const sql = `DELETE FROM department WHERE id = ?`;
//   const params = [req.params.id];

//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.statusMessage(400).json({ error: res.message });
//     } else if (!result.affectedRows) {
//       res.json({
//         message: 'department not found'
//       });
//     } else {
//       res.json({
//         message: 'deleted department',
//         changes: result.affectedRows,
//         id: req.params.id
//       });
//     }
//   });
// });



// //create server listener
// app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));

// const inquirer = require("inquirer");
// // Import and require mysql2
// const mysql = require("mysql2");

// // Connect to database
// //TODO - hide credentials
// const database = mysql
//   .createConnection({
//     host: "localhost",
//     user: 'root',
//     password: '',
//     database: "company_db",
//   })
//   .promise();

//   //this is where you write your query
//   const choicesRole = async () => {
//     const RoleQuery = `SELECT id AS value, role_id AS name FROM employee`;
//     const Roles = await database.query(RoleQuery);
//     console.log(Roles[0])
//     return Roles[0];
//   };


// inquirer.prompt([
//   {
//     type: "list",
//     message: "Choose your dept",
//     name: "id",
//     choices: async () => await choicesRole(),
//   }
// ]);