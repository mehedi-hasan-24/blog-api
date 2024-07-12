const mongoose = require("mongoose");
let DB_CONNECTION_URL = process.env.DB_CONNECTION_URL;
DB_CONNECTION_URL = DB_CONNECTION_URL.replace('<username>', process.env.DB_USERNAME);
DB_CONNECTION_URL = DB_CONNECTION_URL.replace('<password>', process.env.DB_PASSWORD);

const connectDB = async () => {
    await mongoose.connect(DB_CONNECTION_URL, { dbName: process.env.DB_NAME });
    console.log("DB connected...");
}

module.exports = connectDB;