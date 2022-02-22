const mongoose = require('mongoose');

const slideShowSchema = new mongoose.Schema({
    imageUrl:{type:String,required:true},

},{
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model("slideShow",slideShowSchema); //mongo collection --> slideShows