require("dotenv").config()
const mongoose = require('mongoose');

module.exports = () => {
    // Place mongodb atlas url here
    return mongoose.connect(process.env.MONGODB_URL);
}