const express = require("express");
const Category = require("../models/category.model");
const Product = require("../models/product.model");
const router = express.Router();

router.get("/:category", async(req, res)=>{
    try{
        const category = await Category.findOne({name:req.params.category}).lean().exec();
        

    }
    catch(er){
        return res.status(500).send(er.message)
    }
})


module.exports = router;