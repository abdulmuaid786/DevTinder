const express = require('express');
const app = express();

app.listen(7777,()=>{
 console.log("Server is successfully listening on 7777")
});

app.get("/user",(req,res,next)=>{
   console.log("From the First Request Handler");
    //res.send({firstName:"Abdul", lastName: "Muaid"})
    next();
}),
app.get("/user",(req,res,next)=>{
    console.log("From 2nd Request Handler");
     //res.send({firstName:"Abdul", lastName: "Muaid", Response:"2nd"})
     next();
 }),
app.get("/user",(req,res,next)=>{
    console.log("From the 3rd Request Handler");
     res.send({firstName:"Abdul", lastName: "Muaid", Response:"3rd"})     
 });
