const mongoose = require('mongoose');
require('dotenv').config()


console.log("Mongo URL:", process.env.MONGO_URL);


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL , {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  }
};

const Schema =  mongoose.Schema ;
const ObjectId = mongoose.Types.ObjectId


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
 creatorId : ObjectId,
})
const Purchase = new Schema({
   userId :ObjectId,
    CourseId :ObjectId
})

const UserModel =  mongoose.model('Users',User);
const AdminModel = mongoose.model('Admin',Admin)
const CourseModel = mongoose.model('course',Course);
const PurchaseModel = mongoose.model('purchases',Purchase);

module.exports = {
    connectDB,
    UserModel,
    AdminModel,
    CourseModel,
    PurchaseModel
}

