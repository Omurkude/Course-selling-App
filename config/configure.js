
require('dotenv').config();
const z = require('zod')
const signupbody = z.object({
    email :z.string().email(),
    password : z.string().min(6).max(20),
    FirstName : z.string().min(3).max(50),
    LastName : z.string().min().max(50)
})

const signinbody = z.object({
    email :z.string().email(),
    password :z.string().min(6).max(20)
})
const salt  = 10 ;


module.exports = {
  USER_JWT_SECRET: process.env.USER_JWT_SECRET,
  ADMIN_JWT_SECRET: process.env.ADMIN_JWT_SECRET,
  signinbody,
  signupbody,
  salt
};
