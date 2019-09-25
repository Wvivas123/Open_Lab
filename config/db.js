const mongoose = require("mongoose");
const config = require("config");
const db = config.get('MongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log("Connected to mongoDB")


    } catch (err) {
        console.error(err);
    }
}
module.exports = connectDB;