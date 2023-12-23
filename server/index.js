// NODE MODULES
const express = require("express");
const cors = require("cors")
require('dotenv').config()

//DATABASE
const dbMan = require("./db")

//APP
const app = express();


// MIDDLEWARE

app.use(cors());
app.use(express.json());



app.listen(process.env.PORT , () => {
    console.log("SERVER STARTED LISTENING FOR INCOMING REQUESTS ON PORT " + process.env.PORT);
})

