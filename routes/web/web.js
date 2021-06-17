const express = require('express');
const router = express.Router();
require('express-router-group');
const frontEndRoutes = require('./frontend');


router.group('/', (router) => {
    router.use('/', frontEndRoutes);
})

module.exports = router;
