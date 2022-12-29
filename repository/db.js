const mysql = require("mysql2")

const pool = mysql.createPool({
    host : "127.0.0.1",
    port : "3306",
    user : "root",
    password : "tiajsrlf1!",
    database : "node",
    connectionLimit : 5,
    dateStrings : String
}).promise()

module.exports = pool