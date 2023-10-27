const router = require('express').Router()

const authrouter = require('../app/auth/auth.router')
const categoryrouter=require('../app/category/category.router')
router.use(authrouter);
router.use('/category',categoryrouter);



module.exports=router;