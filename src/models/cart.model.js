const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    productId:{type:mongoose.Schema.Types.ObjectId,ref:"product",required:true},
    quantity:{type:Number,required:true},

},{
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model("cart",cartSchema); //mongo collection --> cart