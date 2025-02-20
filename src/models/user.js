const mongoose = require("mongoose");

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
    },
    password: {
        type: String,
        required: true,
        minLength : 6,
        validation(values){
            if(minLength != 6 ){
                throw new Error("Password Minimum length 6")
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