
const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name: {type:String, required: true},
    price: {type: Number, required:true},
    MRP: {type:Number},
    discount:{type:Number},
    brand: {type:String, required: true},
    main_img: {type:String, required:true},  
    key_features : [{type:String, required:true}],
    diff_angle_img: [{type:String}],  //THis is for the images shown below the large on on individual product page
    prod_spec_imgs: [{type:String}], //THe large section below the products which gives the details of it through images
    prod_spec_html: {type:String}, //Stored as html syntax. TO be used with something like innerHTML
    category: {type: mongoose.Schema.Types.ObjectId, ref:"category"},
    stock: {type:Number} //Need in catalog pages
},{
    versionKey:false,
    timestamps:true,
})


module.exports = mongoose.model("product", productSchema); //mongo collection --> products
