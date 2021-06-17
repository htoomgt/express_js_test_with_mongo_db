var express = require('express');
const router = express.Router();


router.get('/about', (req,res) => {
    res.send("This is about us page");
})

module.exports = router;






