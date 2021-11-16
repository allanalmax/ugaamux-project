const mongoose = require('mongoose');

const  labelSchema = new mongoose.Schema({
    labelname: {
        type: String,
        trim: true,
    },
    labelowner: {
        type: String,
        trim: true,
    },
    labelhome: {
        type: String,
        trim: true,
    },
    members: {
        type: String,
        trim: true,
    },
    labelicon: {
        type: String,
        trim: true,
    },
    sponsors: {
        type: String,
        trim: true,
    },
    formationdate: {
        type: String,
        trim: true,
    },
    artistsmanaged: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Labelform', labelSchema);