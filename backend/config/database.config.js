const mysql = require("mysql");
require("dotenv").config();
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: 3306,
});

// pool.getConnection(function (err, connection) {
//   // Use the connection
//   connection.query("SELECT something FROM sometable", function (err, rows) {
//     // And done with the connection.
//     connection.release();

//     // Don't use the connection here, it has been returned to the pool.
//   });
// });

// The pool will emit a connection event when a new connection is made within the pool.
// If you need to set session variables on the connection before it gets used, you can listen to the connection event.
pool.on("connection", function (connection) {
  console.log("Connected");
  // Set a session variable
  //connection.query('SET SESSION auto_increment_increment=1')
});

// <<< CLOSE THE CONNECTION USING pool.end >>>
// When you are done using the pool, you have to end all the connections or the Node.js
// event loop will stay active until the connections are closed by the MySQL server.
// This is typically done if the pool is used in a script or when trying to gracefully shutdown a server.
// To end all the connections in the pool, use the end method on the pool:

pool.end(function (err) {
  // all connections in the pool have ended
});

module.exports = {
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
};
