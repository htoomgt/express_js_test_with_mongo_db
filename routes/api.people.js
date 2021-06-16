import {app} from '../app.js';
import userCtl from '../controllers/UserController.js';

app.get('/peoples/:id', (req, res) => {
    userCtl.getPeopleById(req, res);
})

app.get('/peoples', (req, res)=> {
    userCtl.getAllPerson(req, res);
})

