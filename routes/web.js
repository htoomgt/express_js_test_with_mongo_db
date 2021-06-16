import {app} from '../app.js';
import homeCtl from '../controllers/HomeController.js';
import './frontend.js';

app.get('/', (req, res) => {
    homeCtl.landingPage(req, res);
})

app.get('/home', (req, res) => {
    homeCtl.landingPage(req, res);
})

app.get('/people/:id', (req, res) => {
    homeCtl.getPeopleById(req, res);
})

export default app;