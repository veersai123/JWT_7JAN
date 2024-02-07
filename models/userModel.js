const { mongoose } = require("../config/db");

let userSchema = new mongoose.Schema({ 
    fname: String,
    lname: String,
    email: String,
    username:{
        type: String,
        required:true
    },
    pass:String,
    role: {
        type:String,
        enum:['teacher','student'],
        default:"student"
    }
 });

const Userinfo = mongoose.model('Student',userSchema );

module.exports=Userinfo