
const express = require('express');
const userCtl = require('../controllers/UserController.js');
const router = express.Router();

    router.get('/peoples/:id', (req, res) => {
        userCtl.getPeopleById(req, res);
    })
    
    router.get('/peoples', (req, res)=> {
        userCtl.getAllPerson(req, res);
    })

module.exports = router;

    




