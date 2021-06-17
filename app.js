var express = require('express');
var app = express();



const dotenv = require('dotenv');



dotenv.config();
const port = process.env.DEV_PORT;



module.exports =  {app, port};