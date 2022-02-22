const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    imageUrl:{type:String,required:true}, //main Image
    previewUrl:[{type:String,required:true}], // mini images show under other images
    cartImageUrl:{type:String,required:true}, // for cart and placed order page
    titles:{type:String,required:true},
    dealPrice:{type:Number,required:true},
    retailPrice:{type:Number,required:true},
    savePrice:{type:Number,required:false},
    discount:{type:Number,required:true},
    offerAvailability:{type:Boolean,required:true,default:false},
    articleId:{type:Number,required:false},
    description:{type:String,required:false},
    descriptionImageUrl:{type:String,required:false},
    specificationType:{type:String,required:false} // i have doubt should i do it nested way or make another Schema




},{
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model("product",productSchema); //mongo collection --> products