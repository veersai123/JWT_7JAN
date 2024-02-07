const express=require("express")
const controller = require("../controllers/userController")

const userRouter=express.Router()


userRouter.post('/register',controller)

userRouter.post('/login',(req,res)=>{
    res.send("login")
})

module.exports=userRouter