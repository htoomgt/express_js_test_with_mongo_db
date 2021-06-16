import app from './routes/web.js'
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.DEV_PORT;



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})