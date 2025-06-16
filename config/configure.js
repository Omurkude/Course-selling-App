
require('dotenv').config();


module.exports = {
  USER_JWT_SECRET: process.env.USER_JWT_SECRET,
  ADMIN_JWT_SECRET: process.env.ADMIN_JWT_SECRET
};
