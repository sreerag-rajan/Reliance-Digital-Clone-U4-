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


router.get("", async(req,res)=>{
    try{
        const product = await Product.find().select({name:1}).lean().exec();

        res.status(201).send(product);

    }
    catch(er){
        return res.status(500).send(er.message)
    }
})

router.get("/:id", async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id).lean().exec();

        res.render("product",{
            product
        })

    }
    catch(er){
        return res.status(500).send(er.message)
    }
})

module.exports=router;

