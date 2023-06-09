const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : '< MySQL username >',
  password : '< MySQL password >',
  database : 'my_db'
});

connection.connect();