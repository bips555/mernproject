const router = require("express").Router();
const authcontroller = require("./auth.controller");
const uploader = require("../../middlewares/fileuploader.middleware");
const { registerschema } = require("./auth.validator");
const Validaterequest = require('../../middlewares/validate-request.middleware')
const dirsetup = (req, res, next) => {
  req.uploaddir = "./public/uploads/users";
  next();
};

router.post(
  "/register",
  dirsetup,
  uploader.single("image"),
  Validaterequest(registerschema),
  authcontroller.register
);
router.get("/verify-token/:token", (req, res, next) => {});
router.post("/set-password/:token", (req, res, next) => {});
router.post("/login", (req, res, next) => {});
router.post("/forget-password", (req, res, next) => {});
router.get(
  "/me",
  (req, res, next) => {},
  (req, res, next) => {}
);
router.post(
  "/logout",
  (req, res, next) => {},
  (req, res, next) => {}
);

module.exports = router;
