const mongoose = require("mongoose");
const dbConfig = require("../configs/Database.js");

mongoose.connect(
    dbConfig.mongodb.connectionString,
    { useNewUrlParser: true },
    () => {
        console.log("connected to mongo database!");
    }
);

module.exports = mongoose;
