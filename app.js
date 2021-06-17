var express = require('express')
var app = express()
var router = express.Router()



const dotenv = require('dotenv');



dotenv.config();
const port = process.env.DEV_PORT;



module.exports =  {app, port, router};