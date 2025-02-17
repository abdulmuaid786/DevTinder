const express = require('express');

const app = express();
app.listen(7777,()=>{
 console.log("Server is successfully listening on 7777")
});



app.get("/getUserData",(req,res,next)=>{
   try{
    throw new Error("ErroR Throw");
    res.send("user data sent");
   }
   catch(err){
    res.status(500).send("Someting Went Wrong Boom!");
   }
   
   });

app.use("/", (err, req, res, next) =>{
    if(err){
        res.status(500).send("Someting Went Wrong RIP!");
    }
});
