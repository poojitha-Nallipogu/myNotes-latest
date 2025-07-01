const mongoose = require('mongoose');
const User = require('./user.model'); 
const noteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

const Notes = mongoose.model('note', noteSchema);

module.exports = Notes;
