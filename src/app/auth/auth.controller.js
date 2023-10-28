const dotenv = require("dotenv");
dotenv.config();
const { generateRandomString } = require("../../config/helpers");
const mailservice = require("../../services/mail.service");
class Authcontroller {
  register = async (req, res, next) => {
    try {
      let payload = req.body;
      if (req.file) {
        payload.image = req.file.filename;
      } else if (req.files) {
        payload.image = req.files.map((item) => item.filename);
      }
      payload.status = "inactive";
      payload.token = generateRandomString();

      // mail system,OTP

      const mailAck = await mailservice.emailSend(
        payload.email,
        "Activate your Account",
       
      );
      console.log(mailAck);

      res.json({
        result: payload,
      });
    } catch (exception) {
      next(exception);
    }
  };
}
const authcontroller = new Authcontroller();
module.exports = authcontroller;
