// require("dotenv").config()
// const nodemailer=require("nodemailer")
// this js file is not related to any functionality like model controller middleware anything
const generateRandomString = (len = 100) => {
  let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lengths = chars.length;
  let random = "";
  for (let i = 1; i <= len; i++) {
    let position = Math.ceil(Math.random() * (lengths - 1));
    random = random + chars[position];
  }
  return random;
};
module.exports = { generateRandomString };
