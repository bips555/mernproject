const multer = require("multer");
const fs = require("fs");
const mystorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let path = req.uploaddir??"./public/uploads";
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
    cb(null, path);
  },
filename:(req,file,cb)=>
{
    let random=Math.round(Math.random()*9999)
    let ext=(file.originalname.split(".")).pop()
    let filename=Date.now()+"-"+random+"."+ext
    
    cb(null,filename)
}
});
const imagefilter=(req,file,cb)=>
{
let ext=(file.originalname.split(".")).pop()
let fileallowedextensions=['jpg','jpeg','gif','svg','bmp','webp','png']
if(fileallowedextensions.includes(ext.toLowerCase())
)
{
    cb(null,true)
}
else
{
    cb({code:400,message:"validation failure"},null)
} 
}
const uploader = multer({
  storage: mystorage,
  fileFilter: imagefilter,
  limits:
  {
    fieldSize:3*1024*1024,
    
  }
});
module.exports=uploader