const Notes = require('../models/note.model.js');

const handleGetNotes = async (req, res) => {
    const notes = await Notes.find({ createdBy: req.user._id }).select('-__v');
    if(!notes){
        console.log('internal server error');
    }
    return res.json(notes);
}

const handleGetNotesById = async (req, res) => {
    const id = req.params.id;
    const note = await Notes.findOne({ _id: id, createdBy: req.user._id }).select('-_id -__v');
    if(!note){
        console.log('internal server error');
    }
    return res.render('eachNote', {
        note
    })
}
const handleDeleteNotesById = async (req, res) => {
    const id = req.params.id;
    const deleted = await Notes.findOneAndDelete({ _id: id, createdBy: req.user._id }).select('-_id -__v');
    if(!deleted){
        console.log('internal server error');
    }
    return res.redirect('/');
}
const handlePostNotes = async (req, res) => {
    const {name, content} = req.body;
    const result = await Notes.create({
            name,
            content,
            createdBy: req.user._id
        });
    if(!result) {
        console.log('error in storing notes');
    }
    return res.render("createNote");
}


module.exports = {
    handleGetNotes,
    handlePostNotes,
    handleGetNotesById,
    handleDeleteNotesById,
}