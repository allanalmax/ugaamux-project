const express = require('express');
const mongoose = require('mongoose');
const Artistform = require('../models/artistModel');

const router = express.Router();

// Artist form
router.get('/musicArtist_form', (req, resp) => {
    resp.render('musicArtist_form');
});
router.post('/musicArtist_form', (req, resp) => {
    // resp.sendFile(__dirname + '/views/musicArtist_form.html');
    console.log('req.body');
});

module.exports = router;