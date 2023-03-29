const express = require("express");
const Router = express.Router();
const { signUp, login }= require('../Controller/admin_login_signup');


Router.post("/signUp", signUp);
Router.post("/login", login);


module.exports = Router;