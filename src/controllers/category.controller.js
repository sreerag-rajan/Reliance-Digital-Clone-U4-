const express = require("express");
const Category = require("../models/category.model");
const Product = require("../models/product.model");
const router = express.Router();
const app = express();
app.use(express.json());

router.post("/category", async (req, res) => {
  try {
    console.log(req.body);
    const category = await Category.create(req.body);

    return res.status(201).send(category);
  } catch (error) {
    console.log("error:", error);
  }
});

router.patch("/category/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const category = await Category.findByIdAndUpdate(_id, req.body);
        res.send(category)
        console.log(_id, req.body);
    } catch (error) {
        console.log('error:', error);
        res.status(400).send(error);
    }
});

router.delete("/category/:id", async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        res.send(category)
        
    } catch (error) {
        console.log('error:', error);
        res.status(400).send(error);
    }
})

router.get("/:category", async (req, res) => {
  try {
    const category = await Category.findOne({ name: req.params.category })
      .lean()
      .exec();
  } catch (er) {
    return res.status(500).send(er.message);
  }
});

module.exports = router;
