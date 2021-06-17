const express = require('express');
const router = express.Router();

router.get('/test', (req, res)=> {
        res.send('Hello, testing 1,2,3,...!');
    })

module.exports = router;