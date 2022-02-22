const mongoose = require('mongoose');

const gridImagesSchema = new mongoose.Schema({
    imageUrl:{type:String,required:true},

},{
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model("rowImage",gridImagesSchema); //mongo collection --> gridImages