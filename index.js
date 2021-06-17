const { port } = require("./app.js");
const app = require("./routes/index.js");
const mongoose = require("mongoose");
const dbConfig = require("./configs/Database.js");

mongoose.connect(
    dbConfig.mongodb.connectionString,
    { 
        useNewUrlParser: true,
       useUnifiedTopology: true,
       useCreateIndex:true,
    
    }    
).then(() => {
    console.log("Mongodb connection string : "+dbConfig.mongodb.connectionString)
    console.log("connected to mongo database!");
}).catch((err) => {
    console.log("db connection err : "+ err.message);
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
