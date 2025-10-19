const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
const e = require('cors')
const UserModel = require("./model/User");
dotenv.config();
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("Connected to MongoDb"))
.catch(err=>console.log("failed to connect to MongoDb",err))




app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on port ${process.env.PORT} `);
})

app.post("/signup",async(req,res)=>{
    try{
   const {name,email,password}=req.body;
   console.log(name+" "+email+" "+password);


   const existingUser = await UserModel.findOne({email});


   console.log(existingUser);
   if(existingUser){
    return res.status(400).json({error:"Email already exists"});
   }



   const hashedPassword= await bcrypt.hash(password,10);
   const newUser = new UserModel({name,email,password:hashedPassword});
   const savedUser = await newUser.save();
   res.status(201).json(savedUser);
    }catch(error){
        res.status(500).json({error:error.message});
    }
})


app.post("/login",async (req,res)=>{
    try{

        const {email,password}=req.body;
        const user= await UserModel.findOne({email});
        if(user){
        const passwordMatch= await bcrypt.compare(password,user.password);
        
        if(passwordMatch){
            res.json("Success");
        }else{
            res.status(401).json("Password does not match");
        }
        }else{
            res.status(401).json("NO Records Found");
        }
    }catch(e){
res.status(500).json({error:err.message})
    }
})