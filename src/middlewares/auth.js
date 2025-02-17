const adminAuth = (req,res,next) =>{
    console.log("Admin Auth is checked...")
    const token = "xyz";
    const isAdminAuth = token === "xyz";

    if(!isAdminAuth){
        res.status(401).send("Unauthorized Reqeust");
    }
    else{
        next();
    }

};

const userAuth = (req,res,next) =>{
    console.log("User Auth is checked...")
    const token = "xyz";
    const isAdminAuth = token === "xyz";

    if(!isAdminAuth){
        res.status(401).send("Unauthorized Reqeust");
    }
    else{
        next();
    }

};

module.exports = {
adminAuth,
userAuth,

};