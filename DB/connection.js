const mysql = require('mysql2/promise');

// Create the connection to database
const mysqlConnection = async ({ querys, values = [] }) => {
   let connection = await mysql.createConnection({
       host: 'localhost',
       user: 'root',
       password: '',
       port:3306,
       database:"devmind_practise"
   });
 try {
   var data;
   await connection.connect() // create connection to db
   .then(() => connection.query(querys)) //run queries of mysqul
   .then(([rows, fields]) => {   //retrun data from query
       data = rows;
   });
   await connection.end(); //connection end to mysql
   return data;
 } catch (error) {
   return { error };
 }
}
module.exports= mysqlConnection;