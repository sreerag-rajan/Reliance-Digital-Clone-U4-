
const express = require("express")
const Product = require("../models/product.model")
const Category = require("../models/category.model")

const router = express.Router()

router.get("", async (req,res)=>{
        try{
            let where = {};
            if(req.query.brand){
                where.brand = req.query.brand
            }
            
            const searchterms = req.query.q.split(" ");
            
            //getting all products from database
            let products = await Product.find().where(where).lean().exec();

            
            //filtering the products according to our searched term
            let filteredProds = [];
            searchterms.forEach((term)=>{
                let prods = products.filter((prod)=>{
                    return prod.name.toLowerCase().includes(term.toLowerCase());
                })
                filteredProds = [...filteredProds,...prods];
                
            })

            //Ensuring no products are repeated
            for(let i =0; i<filteredProds.length; i++){
                for(let j = i+1; j<filteredProds.length; j++){
                    if(filteredProds[i]===filteredProds[j]){
                        filteredProds.splice(j,1);
                    }
                }
            }


            //Sorting functinality
            if(req.query.sort){
                if(req.query.sort==="asc"){
                    filteredProds= filteredProds.sort((a,b)=>{
                        if(a.name.toLowerCase()<b.name.toLowerCase()) return -1;
                    });

                }
                else if(req.query.sort ==="desc"){
                    filteredProds= filteredProds.sort((a,b)=>{
                        if(a.name.toLowerCase()>b.name.toLowerCase()) return -1;
                    });
                }
                else if(req.query.sort==="low"){
                    filteredProds= filteredProds.sort((a,b)=>a.price-b.price);
                }
                else if(req.query.sort==="high"){
                    filteredProds= filteredProds.sort((a,b)=> b.price - a.price);

                }
            }

            //fetching some data for the page
            let categories = await Category.find().lean().exec()
            //for sorting out all the brands
            // let allprods = await Product.find().lean().exec()            
            let brands = {};
            for(let i =0; i<filteredProds.length;i++){
                brands[filteredProds[i].brand]=1   
            }
            
            
            let content = {
                prodcount:filteredProds,
                searchTerm:req.query.q,
                checked_brand: req.query.brand,
                products:filteredProds,
                categories:categories,
                brands: brands
            }
            
            return res.render("productcatalogfromsearch.ejs",content);


        }
        catch(er){
            return res.status(500).send(er.message)
        }

    })

module.exports=router

