const express = require("express");
const multer = require('multer');

const Images = require("../models/images.model");
const router = express.Router();
const upload = multer();

router.post("", upload.none(),async (req,res)=>{
    try{
        const images = await Images.create(req.body)
        return res.status(200).send(images);

    }
    catch(er){
        return res.status(500).send(er.message)
    }
})
router.get("", async(req, res)=>{
    try{
        const images = await Images.find().lean().exec();
        return res.send(images);
        

    }
    catch(er){
        return res.status(500).send(er.message)
    }
})
router.get("/:id", async(req, res)=>{
    try{
        const images = await Category.findById(req.params.id).lean().exec();
        res.send(images);

    }
    catch(er){
        return res.status(500).send(er.message)
    }
})
router.patch("/:id", upload.none(),async(req, res)=>{
    try{
        console.log(req.body)

        const images = await Images.findByIdAndUpdate(req.params.id,req.body, {new:true}).lean().exec();
        return res.status(201).send(images);
        

    }
    catch(er){
        return res.status(500).send(er.message)
    }
})


module.exports = router;