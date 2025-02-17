const mongoose = require('mongoose');

const connectDB = async () =>{
 await mongoose.connect(
    "mongodb+srv://abdulmuaid786:Blueeye786@abdulmuaid.yg2jc.mongodb.net/devTinder"
);
};
 module.exports ={
    connectDB,
 }