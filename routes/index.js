import {app} from '../app.js';
import homeCtl from '../controllers/HomeController.js';






app.get('/', (req, res) => {
    homeCtl.landingPage(req, res);
})

app.get('/home', (req, res) => {
    homeCtl.landingPage(req, res);
})

import './web.frontend.js';

import  './api.people.js';





export default app;