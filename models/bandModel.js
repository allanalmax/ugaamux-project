const mongoose = require('mongoose');

const bandSchema = new mongoose.Schema({
    bandname: {
        type: String,
        trim: true,
    },
    bandowner: {
        type: String,
        trim: true,
    },
    bandhome: {
        type: String,
        trim: true,
    },
    members: {
        type: String,
        trim: true,
    },
    bandslogan: {
        type: String,
        trim: true,
    },
    bandicon: {
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
    albumnumber: {
        type: String,
        trim: true,
    },
    musiccategory: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Bandform', bandSchema);