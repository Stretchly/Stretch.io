const { restart } = require('nodemon');
const User = require('../database/UserModel.js');
const userController = {};
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');

// create user // username, password
userController.registerUser = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  //if (User.find({ username })) throw new Error("User already exists");
  const userCheck = await User.find({ username });
  console.log('username : ', username, ' : ', userCheck);
  if (userCheck.length > 0) throw new Error('User already exists');
  // if we find the user we need to throw an error
  res.locals.registeredUser = await User.create({
    username: username,
    password: password,
  });

  return next();
});

userController.authUser = async (req, res, next) => {
  const { username, password } = req.body;
  // get user from db
  const userCheck = await User.find({ username });
  //console.log('username : ', username, ' : ', userCheck);
  // check if user is in db
  if (userCheck.length <= 0) {
    return next({ message: { err: 'user not found' } });
  }
  //compare password
  bcrypt.compare(password, userCheck.password, function (err, result) {
    if (result === true) {
      res.locals.user = userCheck[0];
      return next();
    } else {
      return next({ message: { err: 'user not found or wrong password' } });
    }
  });
};

// Delete a user
// username and password must be passed in request body

userController.deleteUser = async (req, res, next) => {
  const { username, password } = req.body;
  console.log('entering deletion middleware ');

  try {
    // find the userand delete
    await User.deleteOne({ username }).then(
      (user) => (res.locals.deletedUser = user)
    );
  } catch (err) {
    return next({
      status: 401,
      log: 'error in registerUser middleware',
      error: err,
    });
  }
  return next();
};

// find a user
// mostly for  testing deletion
// username must be passed in request body
module.exports = userController;
