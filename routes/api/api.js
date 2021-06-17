var express = require('express');
const router = express.Router();
const people = require('./api.people.js');
const testAPI = require('./api.test');
require('express-router-group');


router.group('/api/v1/', (router) => {
    router.use('/', people);
    router.use('/', testAPI);
})

module.exports = router;

