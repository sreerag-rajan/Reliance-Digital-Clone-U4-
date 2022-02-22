const express = require("express");

const app = express();




app.listen(2345,  async ()=>{
    try{
        //connect to mongo here

    }
    catch(er){
        console.log(er.message)
    }
    console.log("listening on port 2345")
});