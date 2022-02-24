const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId:{ type: String, required: true },
    productId:{type:mongoose.Schema.Types.ObjectId,ref:"product",required:true},
    quantity:{type: Number, default: 1,required:true},

},{
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model("cart",cartSchema); //mongo collection --> cart 