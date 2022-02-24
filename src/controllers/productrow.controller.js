const express = require("express");

const Productrow = require("../models/productrow.model");


const router = express.Router();

router.post("", async (req,res)=>{
    try{
        const productrow = await Productrow.create(req.body);
        return res.send(productrow);

    }
    catch(er){
        return res.status(500).send(er.message)
    }
})

router.get("", async (req,res)=>{
    try{
        const productrows = await Productrow.find().lean().exec();
        return res.send(productrows);

    }
    catch(er){
        return res.status(500).send(er.message)
    }
})

module.exports=router;