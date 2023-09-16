const express = require("express");
const path =  require("path");
const app = express();
require("./db/conn");
const Register = require("./models/registers");
const { create } = require("domain");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views",template_path);

app.get("/",(req,res) => {
    res.render("register")
});

app.get("/register",(req,res) => {
    res.render("register")
});
app.get("/login",(req,res) => {
    res.render("login")
});
app.get("/cart",(req,res) => {
    res.render("cart")
});
//creating a newuser in db
app.post("/register",async (req,res) => {
try{
    const password = req.body.password;
    const cpassword = req.body.confirmpassword;
    
    if(password === cpassword){
const registeruser = new Register({
    fullname :req.body.fullname,
    email :req.body.email,
    phone : req.body.phone,
    // dob :req.body.dob,
    // gender :req.body.gender,
    password :password,
    confirmpassword :cpassword,
    streetaddr1 :req.body.streetaddr1,
    streetaddr2 :req.body.streetaddr2,
    // state :req.body.state,
    city :req.body.city,
    region :req.body.region,
    postalcode :req.body.postalcode
})
const registered = await registeruser.save();
res.status(201).render("login");
    }else{
        res.send("Passwords not Matching")
    }

}
catch(error){
    res.status(400).send(error);
}

})

//login check

app.post("/login",async(req,res)=>{
    try{
const email = req.body.email;
const password = req.body.password;

const useremail = await Register.findOne({email:email});

if(useremail.password === password){
    res.status(201).render("cart");
}else{
    res.send("Invlaid login Details");
}
    }
    catch(error){
        res.status(400).send("Invalid login Details")
    }
})

app.listen(port,() =>{
    console.log(`server is running at port no ${port}`);
})