const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    phone:{type:String,required:true},
    address:[{type:String,required:false}],

},{
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model("user",userSchema); //mongo collection --> users