const express = require('express');
const {restrictTo} = require('../middlewares/auth.middleware')
const User = require('../models/user.model')
const router = express.Router();

const Note = require('../models/note.model');


router.get('/', restrictTo(['user']),async (req,res)=>{
    const notes = await Note.find({ createdBy: req.user._id }).select('-__v');
    return res.render('home', {
        notes
    });
})
router.get('/profile',restrictTo(['user']), (req, res) => {
    res.render('profile', { ...req.user});
});
router.get('/signup', (req,res)=>{
    return res.render('signup');
})

router.get('/login', (req,res)=>{
    return res.render('login');
})

module.exports = router;