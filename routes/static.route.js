const express = require('express');
const router = express.Router();

const Note = require('../models/note.model');


router.get('/', async (req,res)=>{
    const notes = await Note.find({});
    return res.render('home', {
        notes
    });
})

router.get('/signup', (req,res)=>{
    return res.render('signup');
})

module.exports = router;