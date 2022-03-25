const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
// username
    user: "root",
// password
    password: "rootroot*",
    database: "employees"
});
// we need to set up error handling just in case the connection is messed up
connection.connect(function (err) {
if (err) throw err;
});

module.exports = connection;