const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Connect to database
// const db = mysql.createConnection(
//     {
//         host: 'localhost',
//         // MySQL username,
//         user: 'root',
//         // TODO: Add MySQL password here
//         password: '',
//         database: 'company_db'
//       },
//       console.log(`Connected to the company_db database.`)
//     );
// Query database
db.query('SELECT * FROM students', function (err, results) {
    console.log(results);
});
// read departments
// Read all movies
app.get('/api/department', (req, res) => {
    const sql = `SELECT id, employee_name AS name FROM department`;
    
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });


