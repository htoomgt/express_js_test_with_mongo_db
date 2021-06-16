import app from './routes/web.js'
const port = 3000;



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})