const mongoose = require('mongoose');
const Schema =  mongoose.Schema ;


const Objectid = mongoose.Objectid

const User = new Schema ({

 email : {type:String, unique:true},
 password :String,
 FirstName : String,
 LastName : String
})

const Admin =  new Schema({

 email : {type:String, unique:true},
 password :String,
 FirstName : String,
 LastName : String

})
const Course = new Schema({

 title : String,
 description:String,
 price:Number,
 imageUrl :String ,
 creatorId : Objectid
})
const Purchase = new Schema({
   userId :Objectid,
    CourseId :Objectid
})

const UserModel =  mongoose.model('Users',User);
const AdminModel = mongoose.model('Admin',Admin)
const CourseModel = mongoose.model('course',Course);
const PurchaseModel = mongoose.model('purchases',Purchase);

module.exports = {
    UserModel,
    AdminModel,
    CourseModel,
    PurchaseModel
}