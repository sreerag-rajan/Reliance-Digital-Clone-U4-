const express = require("express");
const multer = require('multer');

const Category = require("../models/category.model");
const Images = require("../models/images.model");

const Productrow = require("../models/productrow.model");

// const Product = require("../models/product.model");
const router = express.Router();
const upload = multer();

router.post("", upload.none(),async (req,res)=>{
    try{
        const category = await Category.create(req.body)
        return res.status(200).send(category);

    }
    catch(er){
        return res.status(500).send(er.message)
    }
})
router.get("", async(req, res)=>{
    try{
        const category = await Category.find().lean().exec();
        // const images = await Images.find({category:category._id}).lean().exec()
        return res.send(category);
    }
    catch(er){
        return res.status(500).send(er.message)
    }
})
router.get("/:category", async(req, res)=>{
    try{
        
        const category = await Category.findOne({name:req.params.category}).lean().exec();
        // console.log(category)
        const images = await Images.find({category:category._id}).lean().exec()

        const prodrows = await Productrow.find({category:category._id}).populate({path:"products", select:["name","price","MRP","discount","main_img"]}).lean().exec()
        const content = {
            category,
            images,
            prodrows
        }
        // console.log(images);
        return res.status(201).render("productcatalogfromnav.ejs",content);


    }
    catch(er){
        return res.status(500).send(er.message)
    }
})
router.patch("/:id", upload.none(),async(req, res)=>{
    try{
        console.log(req.body)
        const category = await Category.findByIdAndUpdate(req.params.id,req.body, {new:true}).lean().exec();
        return res.status(201).send(category);
        

    }
    catch(er){
        return res.status(500).send(er.message)
    }
})


module.exports = router;