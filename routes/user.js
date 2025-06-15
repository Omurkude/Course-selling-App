const {Router}= require('express').Router()

const UserRouter = Router();
const { UserModel} = require('../db')

UserRouter.post('/Login',function(req,res){
    res.json({
        msg :"hello"
    })
})
UserRouter.post('/Signup',function(req,res){
    res.json({
        msg :"hello"
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