const express = require('express');
const mongoose = require('mongoose');
const nunjucks = require('nunjucks');
const multer = require('multer');

const uploads = multer({
	dest: __dirname/"uploads"
});

mongoose.connect('mongodb://localhost:3000/syla', {useNewUrlParser: true, useUnifiedTopology: true});
		
require('./models/Animal');
require('./models/Type');

const app = express();
app.use('/css', express.static(__dirname + '/views/css'));
app.use('/images', express.static(__dirname + '/views/images'));

app.use(uploads.single('file'));

app.use('/', require ('./routes/animals'));
app.use('/types', require ('./routes/types'));
express.static('public');

app.use('/uploads', express.static(__dirname + '/uploads'));

nunjucks.configure('views', {
	autoescape: true,
	express: app,
	noCache: false  
});

app.get('/',(req,res)=>{
	res.send('Salut');
});

app.listen(3000, function () {
  console.log('Application écoute sur le port 3000!');
})
