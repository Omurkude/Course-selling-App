const {Router}=require('express');
const  adminRouter = Router()
const {AdminModel} = require('../db')
const bcrypt = require('bcrypt')
const z = require('zod')
const jwt = require('jsonwebtoken')
const {ADMIN_JWT_SECRET} = require('../config/configure')


const signupbody = z.object({
    email :z.string().email(),
    password : z.string().min(6).max(20),
    FirstName : z.string().min(3).max(50),
    LastName : z.string().min().max(50)
})

const signinbody = z.object({
    email :z.string().email(),
    password : z.string().min(6).max(20),
})


adminRouter.post('/Login', async function(req,res){
   const response  = signinbody.safeparse(req.body)
   if(!response.success){
     return res.status(400).json({
        msg : "Invalid credentials",
        err : response.error.err
     })
   }

   const {email ,password } = response.data

   const user = AdminModel.findOne({email});

   if(!user){
    return res.json({
        msg : "USER Doesnt Exists"
    })
   }
   const passmatch = bcrypt.compare(password ,user.password) 

   if (passmatch) {
    const token = jwt.sign({id :user._id.toString()},ADMIN_JWT_SECRET)
    res.status(200).json({
    mssg : "Signed In",
    token:token
    })

    
   }else{
    res.status(400).json({
        msg : "Invalid Credentials"
    })
}
})
adminRouter.post('/Signup', async function(req,res){
    const response  = signupbody.safeparse(req.body)
    const salt  = 12 ;

    if(!response.success){
        return res.status(400).json({
            msg : "Invalid Inputs",
            err : response.error.err
        }) 
    }
     const {password} = response.data ; 
    const ADMIN_hash = bcrypt.hash(password,salt) ;

    await AdminModel.create({
        email,
        password : ADMIN_hash ,
        FirstName ,
        LastName
    })
     res.status(200).json({
      msg : "ADMIN CREATION SUCCESS"

     })

})

adminRouter.get('/Purchases',function(req,res){
    res.json({
        msg :"hello"
    })
})

module.exports = {
    adminRouter : adminRouter
}