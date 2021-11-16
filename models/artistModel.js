const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    fullname: {
        type: String,
        trim: true,
    },
    stagename: {
        type: String,
        trim: true,
    },
    birthdate: {
        type: String,
        trim: true,
    },
    baselocation: {
        type: String,
        trim: true,
    },
    profile: {
        type: String,
        trim: true,
    },
    NIN: {
        type: String,
        trim: true,
    },
    currentlocation: {
        type: String,
        trim: true,
    },
    albumnumber: {
        type: String,
        trim: true,
    },
    artistID: {
        type: String,
        trim: true,
    },
    startdate: {
        type: String,
        trim: true,
    },
    contact: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Artistform', artistSchema);