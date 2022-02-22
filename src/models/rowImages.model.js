const mongoose = require('mongoose');

const rowImagesSchema = new mongoose.Schema({
    imageUrl:{type:String,required:true},

},{
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model("rowImage",rowImagesSchema); //mongo collection --> rowImages