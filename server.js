// Dependecies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const artistRoutes = require('./routes/artistRoutes');
const bandRoutes = require('./routes/bandRoutes');

const Labelform = require('./models/labelModel');

require('dotenv').config();
// Instanciation
const app = express();
const port = 3000;

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   useCreateIndex: true,
});
mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

// Settings
app.set('views', path.join('views'));
app.set('view engine', 'pug');

// Routes
app.use('/artistregistration', artistRoutes);

app.use('/bandregistration', bandRoutes);

// Landing page
app.get('/', (req, resp) => {
  resp.sendFile(__dirname + '/views/home.html');
});

// Selection page
app.get('/selection', (req, resp) => {
  resp.sendFile(__dirname + '/views/selection.html');
});

// Band form
app.get('/musicBand_form', (req, resp) => {
  resp.sendFile(__dirname + '/views/musicBand_form.html');
});
app.post('/musicBand_form', (req, resp) => {
    resp.sendFile(__dirname + '/views/musicBand_form.html');
});

// Label form
app.get('/musicLabel_form', (req, resp) => {
  resp.sendFile(__dirname + '/views/musicLabel_form.html');
});
app.post('/musicLabel_form', (req, resp) => {
    resp.sendFile(__dirname + '/views/musicLabel_form.html');
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, resp) => {
  resp.status(404).send('Page does not exist');
});

// Server
app.listen(port, () => {
  console.log(`The server is live on port number ${port}`);
});
