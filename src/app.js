const express = require('express');
const { connectDB } = require('./config/database');
const User  = require("./models/user");
const app = express();

app.post("/signup", async (req, res) =>{
const user = new User({

   firstName: "Babar",
   lastName: "Azam",
   emailId: "babar@azam.com",
   password: "babar@123",  
   gender: "Male",
   age: 20,

});
try{
   await user.save();
   res.send("User Added Successfully");
} 
catch(err){
   res.status(400).send("Error saving User Data"+ err.message);
}

});

connectDB()
 .then(()=>{
    console.log("Database connection established...");
    app.listen(7777,()=>{
    console.log("Server is successfully listening on 7777")
   });
   
 })
 .catch((err)=>{
    console.err("Datbase cannot be connected!")
 });





