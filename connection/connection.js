import mysql from "mysql2";

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'password',
      database: 'employeetracker'
    },
    console.log('Connected to the employeetracker database.')
  );

  export default db;