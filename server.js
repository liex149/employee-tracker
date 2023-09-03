const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
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


// Query database
// db.query('SELECT * FROM department', function (err, results) {
//     console.log(results);
// });



// read departments
// app.get('/api/department', (req, res) => {
//     const sql = `SELECT id, dept_name FROM department`;
    
//     db.query(sql, (err, rows) => {
//       if (err) {
//         res.status(500).json({ error: err.message });
//          return;
//       }
//       res.json({
//         message: 'success',
//         data: rows
//       });
//     });
//   });

// Create a movie
app.post('/api/department', ({ body }, res) => {
    const sql = `INSERT INTO department (dept_name)
      VALUES (?)`;
    const params = [body.dept_name];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });

//create server listener
  app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));