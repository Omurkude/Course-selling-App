const jwt = require('jsonwebtoken')
const{ADMIN_JWT_SECRET } = require('../config/configure')


function AUTHADMIN (req,res,next){

    const Autheader = req.headers.authorization;
     if (!Autheader || !Autheader.startsWith('Bearer ')) {
    return res.status(401).json({ msg: "Token missing or malformed" });
  }

   const token = Autheader.split(' ')[1]
   try {
    const decoded = jwt.verify(token,ADMIN_JWT_SECRET);
    const adminId = decoded.id;
    next();
   } catch (error) {
    return res.status(400).json({

        msg : "UNAUTHORIZED ACCESS Attempt"
    })
   }
}
module.exports = {
    AUTHADMIN
}