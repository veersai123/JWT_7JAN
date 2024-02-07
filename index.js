const express=require("express")
const { mongo } = require("./config/db")
const userRouter = require("./routes/userRoute")
const app=express()

app.use(express.json())
// app.get('/',(req,res)=>{
//     res.send("hello")
// })
app.use('/api',userRouter)

let port=3000
app.listen(port,()=>{
    console.log("server is runnig on",port)
})