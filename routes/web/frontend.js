var express = require('express');
const router = express.Router();
const homeCtl  = require('../../controllers/HomeController.js');


router.get('/about', (req,res) => {
    res.send("This is about us page");
})

router.get('/home', (req, res) => {
    homeCtl.landingPage(req, res);
})

module.exports = router;






