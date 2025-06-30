const mongoose = require('mongoose');
const dotenv = require("dotenv")

dotenv.config();

const URL =  process.env.MONGODB_URI;
async function connectDB(){
    mongoose.connect(URL);
}

module.exports = connectDB;