const {z} = require("zod")
class Authcontroller {
register = (req, res, next) => {
  try {
    let payload = req.body;
    if (req.file) {
      payload.image = req.file.filename;
    } else if (req.files) {
      payload.image = req.files.map((item) => item.filename);}
    const registerschema =z.object({
      name: z.string().min(2).max(50),
      email:z.string().email(),
      role:z.string().regex(/admin|customer|seller/).default('customer')
    })

   let validateddata=registerschema.parse(payload)
   console.log(validateddata);
    res.json({
      result: validateddata,
    

    })
  
  } 
  catch (exception){
    next(exception);
  }
}
};
const authcontroller = new Authcontroller();
module.exports = authcontroller;
