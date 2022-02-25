const mongoose = require('mongoose');

const cateogrySchema = new mongoose.Schema({
    name: {type: String, required:true},
    category_specs: {type: String}
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("category",cateogrySchema);