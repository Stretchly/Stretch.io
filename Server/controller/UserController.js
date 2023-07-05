const { restart } = require("nodemon");
const User = require("../database/UserModel.js");
const userController = {};
const asyncHandler = require("express-async-handler");

// create user // username, password
userController.registerUser = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  //if (User.find({ username })) throw new Error("User already exists");
  const userCheck = await User.find({ username });
  console.log("username : ", username, " : ", userCheck);
  if (userCheck.length > 0) throw new Error("User already exists");
  // if we find the user we need to throw an error
  res.locals.registeredUser = await User.create({
    username: username,
    password: password,
  });

  return next();
});

userController.authUser = (req, res, next) => {
  return next();
};

// Delete a user
// username and password must be passed in request body

userController.deleteUser = async (req, res, next) => {
  const { username, password } = req.body;
  console.log("entering deletion middleware ");

  try {
    // find the userand delete
    await User.deleteOne({ username }).then(
      (user) => (res.locals.deletedUser = user)
    );
  } catch (err) {
    return next({
      status: 401,
      log: "error in registerUser middleware",
      error: err,
    });
  }
  return next();
};

// Add a favorite
// favorite is passed in through the req.body
    //Find the user with that username. 
    //Push onto their favorites array the current favorites array. 
    //Update the current favorites array. 
userController.addFavorite = async (req, res, next) => {
  const { username, favorite } = req.body;
  console.log("entering add favorite middleware");

  try {
    await User.findOneAndUpdate(
      { username: username }, 
      //push the favorite onto the favorites array
      { $push: { favorites: favorite } }, 
      { new: true }
      ).then((updatedUser) => {
        res.locals.updatedUser = updatedUser;
      });
  } catch (err) {
    return next({
      status: 401,
      log: "error in addFavorite middleware",
      error: err,
    });
  }
  return next();
};

// find a user
// mostly for  testing deletion
// username must be passed in request body
module.exports = userController;
