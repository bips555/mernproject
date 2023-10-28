const express = require("express")
const app = express();
const router=require('../router/');
const { MulterError } = require("multer");
const { ZodError } = require("zod");
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
app.use((error, req, res, next) => {
    console.log("garbage collector: ", error);
    let code = error.code ?? 500;
    let message = error.message ?? "internal server error";
    let result = error.result ?? null;
    if (error instanceof MulterError) {
      if (error.code === "LIMIT_FILE_SIZE")
        (code = 400), (message = error.message);
    }
  
    //  todo: handle different type of exception
  
    if (error instanceof ZodError) {
      code = 400;
      let zodErrors = error.errors;
      let msg = {};
      zodErrors.map((err) => {
        msg[err.path[0]] = err.message;
      });
      message = "validation failure";
      result = msg;
    }
    res.status(code).json({
      result: result,
      message: message,
      meta: null,
    });
  });


// before exporting we use error handler

// app.use()
// for any middleware to load
// doesn't look which method is being used

module.exports=app;
