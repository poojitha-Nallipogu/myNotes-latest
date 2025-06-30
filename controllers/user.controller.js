const User = require('../models/user.model');

const handleSignup =  async (req,res) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password) {
        return res.status(400).json({message: "all fields are required"});
    }
    const user = await User.create({
        username,
        email,
        password
    })
    if(!user) {
        return res.status(500).json({message: "internal server"});
    }
    return res.status(201).json(user);
} 

const handleLogin = async (req,res) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({message: "all fields are required"});
    }
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({message: "email doesn't exist"});
    }
    if(user.password !== password){
        return res.status(400).json({message: "invalid credentials"});
    }
    return res.status(200).json(user);
}

module.exports = {
    handleSignup,
    handleLogin,
}