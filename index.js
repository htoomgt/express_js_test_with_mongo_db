const {port} = require('./app.js');
const app = require('./routes/index.js');




app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})