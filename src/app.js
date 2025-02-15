const express = require('express');
const app = express();

app.listen(7777,()=>{
 console.log("Server is successfully listening on 7777")
});

app.use((req, res)=>{
 res.send("Hello World!!")    
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
        
      