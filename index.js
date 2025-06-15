const express = require('express');
const { UserRouter } = require('./routes/user');
const { CourseRouter } = require('./routes/cousre');
const app = express();
const router  =express.Router()


app.use('/api/v1/user',UserRouter);
app.use('api/v1/cousres',CourseRouter);
app.use('api/v1/admin',)



app.listen(3000)