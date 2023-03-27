// const express=require("express");

// const app=express();

// const winston=require("winston");

// const expressWinston=require("express-winston");
// require('winston-mongodb');

// app.use(expressWinston.logger({
//     statusLevels:true,
//     transports: [
//         new winston.transports.Console({
//             level:"info",
//             json: true
//         }),
//         new winston.transports.MongoDB({
//             level:"info",
//             db: "mongodb://127.0.0.1:27017/logger"
//         })
//     ],
//     format: winston.format.combine(
//         winston.format.colorize(),
//         winston.format.json()
//     )
// }))

// module.exports={
//     expressWinston
// }