const {Router} = require('express')
const {CourseModel} = require('../db')
const z = require('zod');
const { AUTHADMIN } = require('../Middlewares/AdminMiddleware');


const CourseBody = z.object({

 title :z.string(),
 description:z.string(),
 price:z.number(),
 imageUrl :z.string().url() ,
 
})



const CourseRouter = Router();
CourseRouter.post('/Course', AUTHADMIN, async function(req,res){
const response = CourseBody.safeParse(req.body)
const creatorId = req.adminId

if(!response){
    return res.status(400).json({
        msg : "INCORRECT INPUTS",
        err : response.error.err
    })
}
//  bad thing is expecting url from user than image direcctly to learn watch saas video web3 in 6 hours
const course =
await CourseModel.create({...response.data ,creatorId })

res.status(200).json({
    msg : " COURSE CREATED SUCCESFULLY ",
    courseId : course._id  // why _.id here and why  just userid =decoded.id
})




    
})

CourseRouter.get('/Couse/bulk',function(req,res){
    res.json({
        msg: "hey"
    })
})

module.exports = {
    CourseRouter : CourseRouter
}