const express = require('express');
const router = express.Router();

const Animal = require('./../models/Animal');

/*router.get('/',function (req,res){
	console.log('hello');
	Animal.find({}).then(animals => {
		console.log('hello2');
		res.render('./../views/animals/index.html', {animals : animals});
	});
	
});*/

router.get('/', (req,res)=>{
	res.render('./../views/accueil.html');
});

router.get('/infos', (req,res)=>{
	res.render('./../views/infos.html');
});

router.get('/type/:type', (req,res)=>{
	if (req.params.type == "perdu")	res.render('./../views/perdu.html');
	else 
		if(req.params.type == "trouve") res.render('./../views/trouve.html');
});

router.get('/new', (req,res)=> {
	const animal = new Animal();
	res.render('./../views/animals/new_lost.html', {animal : animal});
});

router.get('/:id',function (req,res){
	Animal.findById(req.params.id).populate('type').then(animal => {
		res.render('animals/show.html', {animal : animal});	
	});
});

router.post('/new', (req, res)=> {
	console.log('le post');
	const animal = new Animal();
		animal.race = animal.body.race;
		animal.color = animal.body.color;
		animal.sexe = animal.body.sexe;
		animal.city = animal.body.city;
		
		if(req.file) animal.picture = req.file.filename;
	
		animal.save(); 
		res.redirect('/accueil');
});

module.exports = router;

