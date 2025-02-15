const express = require('express');
const app = express();

app.listen(7777,()=>{
 console.log("Server is successfully listening on 7777")
});

app.get("/user",(req,res)=>{
    res.send({firstName:"Abdul", lastName: "Muaid"})
});

app.post("/user",(req,res)=>{
    res.send("Data has Successfully Stored in Database!!!")
});

app.delete("/user",(req,res)=>{
    res.send("Data has been Deleted From Database!!")
});

app.use("/test", (req, res)=>{
 res.send("Hello World!!, From Test")
});

app.use("/home", (req, res)=>{
 res.send("Hello World!!, From Home")    
});

app.use("/index", (req, res)=>{
    app.use((req, res)=>{
        res.send("Hello World!!")
        
});  res.send("Hello World!!, From Index")        
});
        
app.use((req, res)=>{
    res.send("Hello World!!")    
   });  
      