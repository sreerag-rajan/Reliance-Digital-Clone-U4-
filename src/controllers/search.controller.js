const Product = require("../models/product.model")

module.exports = ()=>{
    return async (req,res)=>{
        try{
            //Splitting the search terms so that each can be searched for
            const searchterms = req.query.q.split(" ");
            
            //getting all products from database
            let products = await Product.find().lean().exec();
            
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
            
            return res.render("productcatalogfromsearch.ejs",{filteredProds});
                

        }
        catch(er){
            return res.status(500).send(er.message)
        }
    }
}