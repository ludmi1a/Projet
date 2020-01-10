const express = require('express');
const router = express.Router();

const Animal = require('./../models/Animal');

router.get('/',function (req,res){
	console.log('hello');
	Animal.find({}).populate('type').then(animals => {
		console.log('hello2');
		res.render('./../views/animals/index.html', {animals : animals});
	});
	
});


router.get('/new', (req,res)=> {
	const animal = new Animal();
	res.render('./../views/animals/new_lost.html');
});

router.get('/:id',function (req,res){
	Animal.findById(req.params.id).populate('type').then(animal => {
		res.render('animals/show.html', {animal : animal});	
	});
});

router.post('/new', (req, res)=> {
	console.log('le post');
	new Promise(function(resolve, reject){
		resolve(new Animal())
	}).then(pokemon => {
		const animal = new Animal;
		animal.race = animal.body.race;
		animal.color = animal.body.color;
		animal.sexe = animal.body.sexe;
		animal.city = animal.body.city;
		
		if(req.file) animal.picture = req.file.filename;
	
		return animal.save(); 
	}).then(() => {
		res.redirect('/');
	});
});

module.exports = router;

