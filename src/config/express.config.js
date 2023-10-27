const express = require("express")
const app = express();
const router=require('../router/')
// body parsers
app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))
app.use('/api/v1',router);
// this middleware is used for the unknown requests that are called
app.use((req,res,next)=>
{
    res.status(404).json({
        result:null,
        message:"not found",
        meta:null
    })
})
// error handling middleware
app.use((error,req,res,next)=>{
    console.log('garabge collector',error);
let code = error.code?? 500;
let message = error.message??"internal server error"
// TODO: Handle different types of exception
res.status(code).json(
{
    result:null,
    message:message,
    meta:null
})
})

// before exporting we use error handler

// app.use()
// for any middleware to load
// doesn't look which method is being used

module.exports=app;
