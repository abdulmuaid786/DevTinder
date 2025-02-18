const express = require('express');
const { connectDB } = require('./config/database');
const User  = require("./models/user");
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) =>{
const user = new User(req.body);
try{
   await user.save();
   res.send("User Added Successfully");
} 
catch(err){
   res.status(400).send("Error saving User Data"+ err.message);
   res.status(400).send("Error saving User Data"+ err.message);
}

});

app.get("/user", async (req,res)=>{
const userEmail = req.body.emailId;

try{
   const users = await User.find({emailId: userEmail });
   if(users.length === 0){
      res.status(404).send("User Not Found");
   }
   else{
      res.send(users);
   }
}catch(err){
   res.status(400).send("Something went wrong");
}


});

app.get("/feed", async (req, res)=>{
try {
   const users = await User.find({});
   res.send(users);

}catch(err){
   res.status(400).send("Something went wrong");
}

}); 

app.delete("/user", async (req, res)=>{
   const userId = req.body.userId;

   try{
      const user = await User.findByIdAndDelete(userId);
      
      res.send("User Delete Successfully!")

   }catch(err){
      res.status(400).send("Something went wrong");
   }

  
}); 

app.patch("/user", async (req, res)=>{
   const userId = req.body.userId;
   const data = req.body;

  try{
   const users = await User.findByIdAndUpdate({_id:userId}, data);

   res.send("User Updatad Succsessfully!")
  }catch(err){
   res.status(400).send("Something went wrong");
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

 



