const express = require('express');
const app = express();
const {connectDB} =require('./db')
const { UserRouter } = require('./routes/user');
const { CourseRouter } = require('./routes/cousre');
const {adminRouter} = require('./routes/admin')
// index.js
require('dotenv').config(); // Load all env variables once
app.use(express.json())

 

connectDB();


app.use('api/v1/user',UserRouter);
app.use('api/v1/cousres',CourseRouter);
app.use('api/v1/admin',adminRouter)



app.listen(3000 ,function(){
console.log("backend running on port 3000 ✅")
})