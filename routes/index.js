var express = require('express')
const {app} = require('../app.js');
const homeCtl  = require('../controllers/HomeController.js');

const webFrontRouter = express.Router();
const webFrontEndLoad = require('./web.frontend');
const apiRouter = require('./api.js');


require('express-router-group');

webFrontRouter.get('/', (req, res) => {
    homeCtl.landingPage(req, res);
})

webFrontRouter.get('/home', (req, res) => {
    homeCtl.landingPage(req, res);
})


// router.group('/api/v1', (router)=> {
//     const apiPeople = require('./api.people.js')(router);
//     const apiTest = require('./api.test.js')(router);
//     router.use('/', apiPeople);
//     router.use('/', apiTest);
// });

// router.group('/', (router) => {
//     const webFrontend = require('./web.frontend')(router);
//     router.use('/',webFrontend);
// });



app.use('/', webFrontRouter);
app.use('/', webFrontEndLoad);
app.use('/', apiRouter);

module.exports = app;