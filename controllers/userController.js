const { mongoose } = require('../config/db');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const Userinfo = require('../models/userModel');

let controller=async(req,res)=>{

const stu= await Userinfo.findOne({email:req.body.email})
console.log(stu)
if(stu)
{
    res.status(500).json({
        msg:"User already exist !"
    })
    return
}

const hash = bcrypt.hashSync(req.body.pass, 10);
req.body.pass=hash

var token = jwt.sign(req.body, 'secret_key');

const user1 = await new Userinfo(req.body);
user1.save().
then(() => console.log('yes done it'))
.catch(()=>{
    console.log("appka data save nhi ho paya")
})
    res.json({
        msg:"okdone",
        token:token
    })
}
module.exports=controller

