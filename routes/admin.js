const {Router}=require('express');
const  adminRouter = Router()



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