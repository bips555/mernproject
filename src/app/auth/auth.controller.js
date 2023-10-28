const {generateRandomString} = require("../../config/helpers")
class Authcontroller {
  register = (req, res, next) => {
    try {
      let payload = req.body;
      if (req.file) {
        payload.image = req.file.filename;
      } else if (req.files) {
        payload.image = req.files.map((item) => item.filename);
      }
      payload.status="inactive"
      payload.token = generateRandomString();
      

      // mail system,OTP
      res.json({
        result:payload
      });
    } catch (exception) {
      next(exception);
    }
  };
}
const authcontroller = new Authcontroller();
module.exports = authcontroller;
