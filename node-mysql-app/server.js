const express =require("express");
const mysql= require("mysql2");
const app=express();


const connection=mysql.createConnection({
    host: 'localhost',     // host for connection
    port: 3306,            // default port for mysql is 3306
    database: 'test',      // database from which we want to connect our node application
    user: 'root',          // username of the mysql connection
    password: 'Sharjeel@123'
});

connection.connect(function(err) {
    if (err) {
        console.log("error occurred while connecting");
    } else {
        console.log("connection created with mysql successfully");
    }
});
app.listen(3030, ()=>{
    console.log("server port is live.......");
})

connection.end();