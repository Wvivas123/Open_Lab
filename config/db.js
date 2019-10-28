const mongoose = require("mongoose");
const config = require("config");
const db = config.get('MongoURI');

const connectDB = () => {
    try {

        mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false

        });
        console.log("Mongo DB is connected");
    } catch (err) {
        console.error(error);
    }
};
module.exports = connectDB;