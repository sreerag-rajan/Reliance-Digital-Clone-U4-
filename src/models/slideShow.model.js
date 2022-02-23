const mongoose = require('mongoose');

const slideShowSchema = new mongoose.Schema({
    desc: {type:String, required:true},  //Just add the page name.
    imageUrl:[{type:String,required:true}],

},{
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model("slideShow",slideShowSchema); //mongo collection --> slideShows