const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    product : {type: mongoose.Schema.Types.ObjectId, ref:"product", required:true}
},{
    versionKey:false,
    timestamps:true,
})


module.exports = mongoose.model("cart", cartSchema); //mongo collection --> cart 

