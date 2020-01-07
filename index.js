const express = require('express');
const hbs = require('express-handlebars');
const app = express();

app.use(express.static('public'));

let animals = [["chien", "noir", "paris"],["chat", "marron", "lille"]];

for(var i=0; i<animals.length; i++){
	document.querySelector('.annonce').innerHTML=document.querySelector('.annonce').innerHTML+"<div class=block id="+animals[i][0]+"><ol><li>Race:"+animals[i][0]+"</li><li>Couleur:"+animals[i][1]+"</li><li>Ville:"+animals[i][2]+"</li></ol></div>";
}

app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'index',
  layoutsDir: __dirname + '/views/',
}));
app.set('view engine', 'hbs');

app.get('/*', function (req, res) {
  res.sendStatus(404);
})

app.listen(3000, function () {
  console.log('Application qui écoute sur le port 3000!');
})


