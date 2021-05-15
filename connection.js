var mysql = require("mysql");

// create the connection information for the sql database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'rootroot',
    database: 'teamMember_DB',
});


// connect to the mysql server and sql database
connection.connect((err) => {
    if (err) throw err;
 // run the start function after the connection is made to prompt the user
      
    start();
});