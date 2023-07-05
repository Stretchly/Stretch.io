// require the path
const path = require("path");
// require html webpack plugin
<<<<<<< HEAD
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
=======
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
>>>>>>> 8d256d3c44c5e09b02bac2139f40470df6c5f1f3
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        //at this point install these: npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react
        use: {
<<<<<<< HEAD
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
=======
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
>>>>>>> 8d256d3c44c5e09b02bac2139f40470df6c5f1f3
          },
        },
      },
      //at this point install these: npm install -D sass style-loader css-loader sass-loader
      {
        test: /\.s?css/,
        use: [
<<<<<<< HEAD
          'style-loader',
          'css-loader',
=======
          "style-loader",
          "css-loader",
>>>>>>> 8d256d3c44c5e09b02bac2139f40470df6c5f1f3
          // 'sass-loader'
        ],
      },
    ],
  },
  //at this point, npm install webpack-dev-server --save-dev
  //at this point, npm install -D webpack-cli
  //at this point,  npm install --save-dev html-webpack-plugin
  //also, ensure to require in HtmlWebpackPlugin at the top of this file
  // npm install nodemon
  //maybe npm install webpack ! we got an error that webpack command not found
  //npm install
  plugins: [
    new HtmlWebpackPlugin({
<<<<<<< HEAD
      template: './client/index.html',
      filename: 'index.html',
=======
      template: "./client/index.html",
      filename: "index.html",
>>>>>>> 8d256d3c44c5e09b02bac2139f40470df6c5f1f3
      //template: path.resolve(__dirname, './index.html'),//ANOTHER WAY
    }),
    // new Dotenv(),
  ],
  //declare devServer
  devServer: {
    static: {
<<<<<<< HEAD
      directory: path.resolve(__dirname, 'build'),
    },
    port: 8080,
=======
      directory: path.resolve(__dirname, "build"),
    },
    proxy: {
      //   context: ['/character','/characters'],
      //   target: 'http://localhost:3000'
      "/api": "http://localhost:3000",
    },
    //port: 8080,
>>>>>>> 8d256d3c44c5e09b02bac2139f40470df6c5f1f3
  },
};
