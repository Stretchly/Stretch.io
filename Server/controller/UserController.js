const { restart } = require("nodemon");
const User = require("../database/UserModel.js");
const userController = {};

// create user // username, password
userController.registerUser = (req, res, next) => {
  const { username, password } = req.body;
  console.log("entering registration middleware");
  console.log(username, password);
  try {
    res.locals.user = User.create({
      username: username,
      password: password,
    });
  } catch (err) {
    return next({
      status: 401,
      log: "error in registerUser middleware",
      error: err,
    });
  }
  return next();
};
userController.authUser = (req, res) => {};

module.exports = userController;
