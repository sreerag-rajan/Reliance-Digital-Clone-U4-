const mongoose = require('mongoose');

module.exports = () => {
    // Place mongodb atlas url here
    return mongoose.connect("");
}