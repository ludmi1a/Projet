const express = require('express');
const mongoose = require('mongoose');
const nunjucks = require('nunjucks');
const multer = require('multer');
const bodyParser = require('body-parser');


const upload = multer({
	dest: __dirname/"upload"
});



require('./models/Animal');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(upload.single('file'));


app.use('/css', express.static(__dirname + '/views/css'));
app.use('/js', express.static(__dirname + '/views/js'));
app.use('/images', express.static(__dirname + '/views/images'));
app.use('/upload', express.static(__dirname + '/upload'));

app.use('/', require ('./routes/animals'));


nunjucks.configure('views', {
	autoescape: true,
	express: app,
	noCache: false  
});


app.listen(3000, function () {
  console.log('Application écoute sur le port 3000!');
})
