//importo mysql2
const mysql = require("mysql2");

//creo la connessione con il db
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db_blog"
});

//effettuo la connessione con il db
connection.connect((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("Connected to mysql")
  }
});

//esporto la connessione
module.exports = connection;