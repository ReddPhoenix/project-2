const mysql = require('mysql');
require('dotenv').config();

// ***create mysql connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.password,
    database: 'taskably'
});

connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('db taskably connected');
});

// ***Export connection
module.exports = connection;