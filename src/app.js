const express = require('express');
const { adminAuth, userAuth } = require('./middlewares/auth');
const app = express();
app.listen(7777,()=>{
 console.log("Server is successfully listening on 7777")
});

app.use("/admin", adminAuth)

app.get("/user",  userAuth, (req,res,next)=>{
    res.send("user data sent");
   
   });

app.get("/admin/getAlluser",(req,res,next)=>{
 res.send({Message:"All data sent ", firstName:"Abdul", lastName: "Muaid"});

});

app.get("/admin/deleteAlluser",(req,res,next)=>{
     res.send("Deleted all data");
 });
