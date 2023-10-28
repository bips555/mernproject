const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
class Mailservice {
  constructor() {
    try {
      this.transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
    } catch (exception) {
      next(exception);
    }
  }
  async emailSend(to, sub, message) {
    try {
      let response = await this.transport.sendMail({
        to: to,
        from: process.env.SMTP_FROM,
        sub: sub,
        html: message,
      });
      return true
    } catch (exception) {
      
    }
  }
}
const mailservice = new Mailservice()
module.exports=mailservice