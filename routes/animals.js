const express = require('express');
const router = express.Router();

const Animal = require('./../models/Animal');
//const Type = require('./../models/Type');

var lost_animals = [];
var found_animals = [];


router.get('/index',function (req,res){
	res.render('./../views/animals/index.html', {animals : lost_animals}); 
	/*let promise = new Promise(function(resolve, reject) {
		var animals = Animal.find({});
		setTimeout(() => resolve("done"), 1000);
	});
	promise.then(
	  function(result) { console.log(animals);
		res.render('./../views/animals/index.html', {animals : animals}); },
	  function(error) { console.log(errrrreur); }
	);*/
});



router.get('/', (req,res)=>{
	res.render('./../views/accueil.html');
});

router.get('/infos', (req,res)=>{
	res.render('./../views/infos.html');
});

router.get('/type/:type', (req,res)=>{
	console.log('hello');
	if (req.params.type == "perdu")	{
		res.render('./../views/perdu.html', {animals : lost_animals});
	}
	else {
		if(req.params.type == "trouve") {
		res.render('./../views/trouve.html', {animals : found_animals});
			}
		}
//	});
});

router.get('/new', (req,res)=> {
	const animal = new Animal();
	res.render('./../views/animals/new_lost.html');
});

router.get('/:type/:id',function (req,res){
	var animal;
	if(req.params.type == "lost"){
		for(var i; i<lost_animals.length; i++){
			if(req.params.id == lost_animals[i].__id){ animal = lost_animals[i]; }
		}
	} if(req.params.type="found"){
		for(var i; i<found_animals.length; i++){
			if(req.params.id == found_animals[i].__id){ animal = found_animals[i]; }
		}
	}
	
	res.render('./../views/animals/show.html', {animal : animal});
});

router.post('/new', (req, res)=> {
	console.log('le post');
	
	const animal = new Animal();
	animal.race = req.body.race;
	animal.color = req.body.color;
	animal.sexe = req.body.sexe;
	animal.city = req.body.city;
	animal.type = req.body.type;
	if(req.file) animal.picture = req.file.filename ;
	
	if (animal.type == "Perdu"){ lost_animals.push(animal); }
	if (animal.type == "Retrouvé"){ found_animals.push(animal); }
	
	res.render('./../views/animals/show.html', {animal : animal});

	
});



module.exports = router;

