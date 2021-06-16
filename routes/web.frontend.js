import {app} from '../app.js';


app.get('/about', (req,res) => {
    res.send("This is about us page");
})

