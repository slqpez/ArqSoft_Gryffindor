const mysql = require("mysql");
const { promisify } = require("util");

const { database } = require("./keys.js");

const pool = mysql.createPool(database);
//TODO perfil administrador y conductor
pool.getConnection((err, connection) => {
  if (err) {
    if (e.code === "PROTOCOL_CONNECTION_LOST") {
      console.log("DATABASE CONECTION WAS CLOSED");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.log("DATABASE HAS TO MANY CONNECTION");
    }
    if (err.code === "ECONNREFUSED") {
      console.log("DATABASE CONNECTION WAS REFUSED");
    }
  }
  if (connection) connection.release();
  console.log("DB is connected!");
  return;
});
pool.query = promisify(pool.query);
module.exports = pool;
