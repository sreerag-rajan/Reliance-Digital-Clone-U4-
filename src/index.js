const path = require("path")
const express = require("express");

const app = express();

const connect = require("./configs/db");
const searchController = require("./controllers/search.controller");
const productController = require("./controllers/product.controller");
const categoryController = require("./controllers/category.controller");

app.use(express.static(path.join(__dirname,'../public')));
app.use(express.json())


app.get("/search",searchController);
app.use("/product", productController)
app.use("/category", categoryController)



app.listen(2345,  async ()=>{
    try{
        await connect();
        console.log("listening on port 2345")

    }
    catch(err){
        console.log(err.message)
    }
    
});