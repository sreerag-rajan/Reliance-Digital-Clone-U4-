const express = require("express");

const Product = require("../models/product.model");
const router = express.Router()

router.post("", async(req,res)=>{
    try{
        const product = await Product.create(req.body)

        res.status(201).send(product);

    }
    catch(er){
        return res.status(500).send(er.message)
    }
})


module.exports=router;

