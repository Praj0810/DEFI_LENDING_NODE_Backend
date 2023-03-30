const express = require("express");
const Router = express.Router();
const { signUp, login }= require('../Controller/adminLoginSignup');


Router.post("/signUp", signUp);
Router.post("/login", login);


module.exports = Router;