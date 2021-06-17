const dotenv = require('dotenv');
dotenv.config();

const config = {
    "mongodb" : {
        "host" : process.env.MONGODB_HOST,
        "port" : process.env.MONGODB_PORT,
        "username" : process.env.MONGODB_USERNAME,
        "passwords" : process.env.MONGODB_PASSWORDS,
        "database" : process.env.MONGODB_DB,
        "connectionString" : `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORDS}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DB}`
    }
}

module.exports = config;