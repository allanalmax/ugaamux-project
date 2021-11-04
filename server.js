// Dependecies
const express = require('express');
const path = require('path')

// Instanciation
const app = express();
const port = 3000;

// Settings
app.set('views', path.join('views'));
// app.set('view engine', 'pug');

// Routes
// Landing page
app.get('/', (req, resp) => {
    resp.sendFile(__dirname + '/views/home.html')
});
// Selection page
app.get('/selection', (req, resp) => {
    resp.sendFile(__dirname + '/views/selection.html')
});
// Artist form
app.get('/musicArtist_form', (req, resp) => {
    resp.sendFile(__dirname + '/views/musicArtist_form.html')
});
// Band form
app.get('/musicBand_form', (req, resp) => {
    resp.sendFile(__dirname + '/views/musicBand_form.html')
});
// Label form
app.get('/musicLabel_form', (req, resp) => {
    resp.sendFile(__dirname + '/views/musicLabel_form.html')
});


// Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, resp) => {
    resp.status(404).send("Page does not exist")
});

// Server
app.listen(port, () => {
    console.log(`The server is live on port number ${port}`)
});