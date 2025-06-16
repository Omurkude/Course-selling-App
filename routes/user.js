const {Router}= require('express')
const z = require('zod');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { USER_JWT_SECRET} = require('../config/configure')

const UserRouter = Router();
const { UserModel} = require('../db')

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


UserRouter.post('/Signup', async function(req,res){
    const data = signupbody.safeparse(req.body);
    const salt  = 10 ;
    if(!data.success){
        return res.status(400).json({
            msg : "Invalid Credentials",
            errors : data.error.errors
        
        })
    }
    const {password} = data.data;
    const hashedpass = bcrypt.hash(password,salt)
    console.log(hashedpass)


    await UserModel.create({
        email,
        password:hashedpass,
        FirstName,
        LastName
    })

    res.status(200).json({
        msg : "Account created / signed up"
    })

UserRouter.post('/Login', async function(req,res){
    const response = signinbody.safeparse(req.body);

    if(!response.success){
        return res.status(400).json({
            msg : "Invalid Credentials",

        })
    }
    const {email ,password} = response.data;

    const user = UserModel.findOne({
        email
    })

    if (!user) {
       return res.json({
        msg : "User does not Exiists " 
       })        
    }

    const passmatch = bcrypt.compare(password ,user.password)

    if(passmatch){

        const token = jwt.sign( { id: user._id.toString() }, USER_JWT_SECRET);
        return res.status(200).json({
            msg: "LoggedIn",
            token 
        })

    }else{
        return res.status(400).json({
            msg : "InvalidCredentials"
        })
    }
    
})

})
UserRouter.get('/Purchases',function(req,res){
    res.json({
        msg :"hello"
    })
})

module.exports = {
    UserRouter :UserRouter
}