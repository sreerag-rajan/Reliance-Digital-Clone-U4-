const mongoose = require('mongoose');

const rowImagesSchema = new mongoose.Schema({
    desc: {type:String}, //Just write something that tells me which set of images this is so that i can target this when needed
    imageUrl:[{type:String,required:true}],

},{
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model("rowImage",rowImagesSchema); //mongo collection --> rowImages