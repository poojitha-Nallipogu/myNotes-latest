const express = require('express');
const {handleGetNotes,
    handlePostNotes, 
    handleGetNotesById, 
    handleDeleteNotesById} = require('../controllers/notes.controller.js')

const router = express.Router();

router.get('/' , handleGetNotes)

router.get('/new',(req,res)=>{
    return res.render('createNote');
})

router.post('/', handlePostNotes)
router.get('/:id', handleGetNotesById)
router.delete('/:id', handleDeleteNotesById)

module.exports = router;