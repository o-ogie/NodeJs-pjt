const mysql = require("mysql2")

const pool = mysql.createPool({
    host : "127.0.0.1",
    port : "3306",
    user : "jung",
    password : "jung",
    database : "jung",
    connectionLimit : 5,
    dateStrings : String
}).promise()

module.exports = pool