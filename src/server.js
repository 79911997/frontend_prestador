const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "grudgames"
});

app.get('/', (req, res) => {
    res.send("hello word")
})





app.listen(3001, () => 
console.log("rodando servidor"))