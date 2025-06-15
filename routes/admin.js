const {Router}=require('express');
const  adminRouter = Router()
const {AdminModel} = require('../db')



adminRouter.post('/Login',function(req,res){
    res.json({
        msg :"hello"
    })
})
adminRouter.post('/Signup',function(req,res){
    res.json({
        msg :"hello"
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