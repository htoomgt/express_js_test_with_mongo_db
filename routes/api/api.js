var express = require('express');
const router = express.Router();
const people = require('./api.people.js');
const testAPI = require('./api.test');
const postRoutes = require('./api.post');
require('express-router-group');
const testMiddleware  = require('../../middlewares/test.js');

const middleware = [
    testMiddleware.apiRequest,
    testMiddleware.apiRequestII
]

router.group('/api/v1/', middleware, (router) => {
    router.use('/', people);
    router.use('/', testAPI);
    router.use('/', postRoutes);
    
})

module.exports = router;

