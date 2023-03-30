const Admin = require("../Model/AdminSchema");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const jwtSecret = process.env["JWTKey"];


const signUp = async(req, res) => {
  try {
    console.log(req.body);
    const admin = new Admin({
      adminAccountAddress : req.body.adminAccountAddress,
      firstName : req.body.firstName,
      lastName : req.body.lastName,
      emailId : req.body.emailId,
      password :  await bcrypt.hash(req.body.password, 10),
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
      const { emailId, password } = req.body;
      if (!emailId || !password) {
        return res.status(400).send({ error: "Please enter the Data" });
      }
      const adminLogin = await Admin.findOne({ emailId: emailId });
      
      if (adminLogin) {
        const validPassword = await bcrypt.compare(password, adminLogin.password);
        if (!validPassword) {
          res.status(400).send({ error: "Enter correct password" });
        } else {
          const token = jwt.sign({_id : adminLogin._id}, jwtSecret);
          res.status(200).json({token :token , message: "Admin Login Successfully" });
        }}else {
        res.status(400).send({message: "Invalid Credentials"}); 
      }
  
    } catch (error) {
      res.status(400);
      console.log(error);
    }
  }

  module.exports = { signUp, login };