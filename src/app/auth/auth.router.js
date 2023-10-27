const router=require('express').Router()
const authcontroller = require('./auth.controller')

router.post('/register',authcontroller.register)
router.get('/verify-token/:token',(req,res,next)=>{})
router.post("/set-password/:token",(req,res,next)=>{})
router.post("/login",(req,res,next)=>{})
router.post("/forget-password",(req,res,next)=>{})
router.get("/me",(req,res,next)=>{},(req,res,next)=>{})
router.post("/logout",(req,res,next)=>{},(req,res,next)=>{})

module.exports=router;