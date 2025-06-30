const mongoose = require('mongoose');

const noteShema = mongoose.Schema({
        name:{
            type: String,
            required: true,
        },
        content:{
            type: String,
        }
    },
    {timestamps: true}
);

const Notes =  mongoose.model('note', noteShema) ;

module.exports = Notes;

