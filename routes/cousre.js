const {Router} = require('express')


const CourseRouter = Router();
CourseRouter.get('/Couse/bulk',function(req,res){
    res.json({
        msg: "hey"
    })
})

CourseRouter.get('/Couse/bulk',function(req,res){
    res.json({
        msg: "hey"
    })
})

module.exports = {
    CourseRouter :CourseRouter
}