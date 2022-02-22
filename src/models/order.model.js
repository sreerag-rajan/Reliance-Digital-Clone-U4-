const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    productId:{type:mongoose.Schema.Types.ObjectId,ref:"product",required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true,default:"guest"},
    quantity:{type:Number,required:true,default:1},


},{
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model("order",orderSchema); //mongo collection --> orders