const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

exports.connect = () => {
    mongoose.connect(MONGO_URI).then(() => {
        console.log("Connected to DB");
    }).catch((error) => {
        console.log("DB Connection Failed, exiting now...");
        console.error(error);
        process.exit(1);
    })
}