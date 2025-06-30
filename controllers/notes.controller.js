const Notes = require('../models/note.model.js');

const handleGetNotes = async (req, res) => {
    const notes = await Notes.find({}).select('-__v');
    if(!notes){
        console.log('internal server error');
    }
    return res.json(notes);
}

const handleGetNotesById = async (req, res) => {
    const id = req.params.id;
    const note = await Notes.findById(id).select('-_id -__v');
    if(!note){
        console.log('internal server error');
    }
    return res.render('eachNote', {
        note
    })
}
const handleDeleteNotesById = async (req, res) => {
    const id = req.params.id;
    const notes = await Notes.findByIdAndDelete(id).select('-_id -__v');
    if(!notes){
        console.log('internal server error');
    }
    return res.json({"msg": "deleted successfully"});
}
const handlePostNotes = async (req, res) => {
    const {name, content} = req.body;
    const result = await Notes.create({
        name,
        content,
    })
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