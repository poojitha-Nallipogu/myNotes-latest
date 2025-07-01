const  dotenv  = require('dotenv');
dotenv.config();

const  jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET

function setUser(user){
    return jwt.sign(user,secretKey);
}

function getUser(token) {
    if (!token) return null;
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        console.error('JWT verification failed:', error.message);
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
}