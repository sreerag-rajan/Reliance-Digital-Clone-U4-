
const mongoose = require("mongoose");

module.exports = () => {
  // Place mongodb atlas url here
  return mongoose.connect(
    "mongodb+srv://reliance:reliance_123@reliancedigitalclone.czetg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};

