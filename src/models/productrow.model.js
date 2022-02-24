const mongoose = require("mongoose")

const productrowSchema = new mongoose.Schema({
    rowheading: {type:String, required:true},
    products: [{type:mongoose.Schema.Types.ObjectId, ref:"product"}],
    category: {type: mongoose.Schema.Types.ObjectId, ref:"category", required:true}
},{
    versionKey:false
})

module.exports= mongoose.model("productrow",productrowSchema);