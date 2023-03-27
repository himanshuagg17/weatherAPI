const express=require("express");
const { UserRouter } = require("./routes/user.route");
const {connection}=require("./config/db");
const {redisclient}=require("./config/redis");


const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


import fetch from 'node-fetch';

const response = await fetch('http://api.weatherstack.com/current
? access_key = d5319fd698b190e43168cd20c9f614f5
');
const body = await response.text();

console.log(body);



const app=express();
app.use(express.json());
app.use(UserRouter);

require('dotenv').config()
const port=process.env.port;


const winston=require("winston");

const expressWinston=require("express-winston");

require('winston-mongodb');

app.use(expressWinston.logger({
    statusLevels: true,
    transports: [
        new winston.transports.Console({
            level:"info",
            json: true
        }),
        new winston.transports.MongoDB({
            level: "info",
            db: "mongodb://127.0.0.1:27017/logger"
        })
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}))



app.get("/",(req,res)=>{
    res.send("the home page");
})


app.listen(port,()=>{
    console.log(`The server is running at ${port}`)
})