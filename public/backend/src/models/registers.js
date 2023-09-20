const mongoose = require("mongoose");

const users= new mongoose.Schema({

    fullname :{
        type: String,
        required : true
    },
email : {
    type: String,
    required : true,
    unique: true
},
phone : {
    type: Number,
    required : true,
    unique: true
},
// dob : {
//     type: Number,
//     required : true,
// },
// gender :{
//     type: String,
//     required : true,
// },
password :{
    type: String,
    required : true,
},
confirmpassword :{
    type: String,
    required : true,
},
streetaddr1 :{
    type: String,
    required : true,
},
streetaddr2 :{
    type: String,
    required : true,
},
// state :{
//     type: String,
//     required : true,
// },
city :{
    type: String,
    required : true,
},
region :{
    type: String,
    required : true,
},
postalcode :{
    type: Number,
    required : true,
},

})

// create collections

const Register = new mongoose.model("Register",users);

module.exports  = Register;