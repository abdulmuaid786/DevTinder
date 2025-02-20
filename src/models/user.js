const mongoose = require("mongoose");
const validator =require("validator");

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        maxLength : 15,
    },
    lastName: {
        type: String,
        maxLength : 15,
    },
    emailId: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email address: "+ value);
                
            }
        },
    },
    password: {
        type: String,
        required: true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Enter a Strong Password: "+ value);
                
            }
        },
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
        validate(values){
            if(!["male","female","others"].includes(values)){
                    throw new Error("Gender data is not valid!")
            }
        },
    },
    photoUrl: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRLRMXynnc7D6-xfdpeaoEUeon2FaU0XtPg&s",
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("Invalid URL address: "+ value);
                
            }
        },
    },
    about:{
        type: String,
        default:"Default User Description!",
    },
    skills:{
        type:[String],
    },

},
{
 timestamps: true,
});

module.exports = mongoose.model("User", userSchema);