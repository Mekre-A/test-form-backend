import mysql from "mysql";
import { createConnection } from "net";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "securepassword",
  port: 3306,
  database: "user_records",
});

export default connection;
