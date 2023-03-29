const Admin = require("../Model/AdminSchema");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const jwtSecret = "qwerty131";


const signUp = async(req, res) => {
  try {
    console.log(req.body);
    const admin = new Admin({
        Admin_Account_Address : req.body.Admin_Account_Address,
        First_Name : req.body.First_Name,
        Last_Name : req.body.Last_Name,
        EmailId : req.body.EmailId,
        Password :  await bcrypt.hash(req.body.Password, 10),
      });
      await admin.save();
      res.send("Admin signup Successful");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
  
}



const login = async (req, res) => {
    try {
      const { EmailId, Password } = req.body;
      if (!EmailId || !Password) {
        return res.status(400).send({ error: "Plz enter the data" });
      }
      const adminLogin = await Admin.findOne({ EmailId: EmailId });
      
      if (adminLogin) {
        const validPassword = await bcrypt.compare(Password, adminLogin.Password);
        if (!validPassword) {
          res.status(400).send({ error: "enter correct password" });
        } else {
          const token = jwt.sign({_id : adminLogin._id}, jwtSecret);
          res.status(200).json({token :token , message: "Admin Login Successfully" });
        }}else {
        res.status(400).send({message: "invalid credentials"}); 
      }
  
    } catch (error) {
      res.status(400);
      console.log(error);
    }
  }

  module.exports = { signUp, login };