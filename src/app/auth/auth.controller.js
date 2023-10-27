class Authcontroller {
register = (req, res, next) => {
  try {
    let payload = req.body;
    res.json({
      result: payload,
    });
  } catch (exception) {
    next(exception);
  }
}};
const authcontroller = new Authcontroller();
module.exports = authcontroller;
