const jwt = require('jsonwebtoken');
const jwtSecret = "qwerty131";

async function authToken(req,res,next) {
    const authHeader = req.header('authorization');
    const token = await authHeader && authHeader.split(" ")[1];
    if (token == null) {
        res.status(400).send("token invalid access denied");
    }
    try{
        const verification = jwt.verify(token, jwtSecret);
        req.userLogin = verification;
        next();

    }catch(error){
        res.status(400).send('token is incorrect');
    }
}




module.exports = { authToken } ;
