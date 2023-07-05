// goal: set up express routing
// enviroment variable configuration
require('dotenv').config();
// steps
// create a controller.js
// this will contain routers
// ensure exports/imports are handled
// declare port
// define endpoints and actions
// add listener for PORT

const express = require('express');
const app = express();
const path = require('path');
const controller = require('./controller/ExerciseController.js');
const startServer = require('./database/dbConnection.js');
const userController = require('./controller/UserController.js');

const PORT = 3000;

app.use(express.json());
// if you ever have a form on your frontend, express.urlencoded
app.use(express.urlencoded({ extended: true })); // this will be helpful for stringifying a form req from an .html file

// want to send get request on 'submit' from the dropdown selection on home page
// dropdown body be the req.body that gets sent to controller.js
// the req.body is used to create and make the API call
// get response from res.locals.varName and res.status().json(stretch array)

// new instance of router
// const stretchRouter = express.Router();
startServer();

// to create user into database // takes in body // username, password

app.post('/user', userController.registerUser, (req, res) => {
  console.log();
  return res.status(200).json(res.locals.registeredUser);
});

// delete user from database
app.delete('/user', userController.deleteUser, (req, res) =>
  res.status(200).json(res.locals.deletedUser)
);

// TODO:
// get user from database

// to authenticate user based on input username and password
app.get('/login', userController.authUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

// /API/exercises?muscle=${muscle}&type=stretching
app.get('/api', controller.getStretches, (req, res) => {
  return res.status(200).json(res.locals.apiRes);
});

// app.get('/api', controller.getExercise, (req, res) => {
//     return res.status(200).json(res.locals.apiRes);
// });

// error if route not found
app.use(() =>
  next({
    status: 404,
    log: 'Route not found',
  })
);

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// listener

app.listen(PORT, () => console.log(`listening on ${PORT}`));
