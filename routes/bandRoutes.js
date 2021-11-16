const express = require('express');
const mongoose = require('mongoose');
const Bandform = require('../models/bandModel');

const router = express.Router();

// Band form
router.get('/musicBand_form', (req, resp) => {
  resp.render('musicBand_form');
});
router.post('/musicBand_form', (req, resp) => {
    console.log(req.body);
});

module.exports = router;