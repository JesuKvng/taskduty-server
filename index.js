require("dotenv/config")
const express = require("express");
const app = express();
const port = 3300;
const mongoose = require("mongoose")
const connect = require('./config/db')




connect()
.then(()=>{
    try {
        app.listen(port,()=>{
            console.log(`server is running on http://localhost:${port}`);
        })
    } catch (error) {
        console.log("cannot connect to the server"); 
    }
})
.catch((error)=>{
    console.log("invail database connection...!",
    error);
})



app.get('/',(req,res)=>{
    res.send('Hello world')
})
