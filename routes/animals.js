const express = require('express');
const router = express.Router();

const Animal = require('./../models/Animal');
const Type = require('./../models/Type');

const lost = new Type();
lost.name = "Perdu";
const found = new Type();
found.name = "Retrouvé";
const types  = [lost, found];

const a  = new Animal({
	race: "chien",
	couleur : "beige",
	ville : "paris",
	sexe : "male"
})


router.get('/index',function (req,res){
	let promise = new Promise(function(resolve, reject) {
		var animals = Animal.find({});
		setTimeout(() => resolve("done"), 1000);
	});
	promise.then(
	  function(result) { console.log(animals);
		res.render('./../views/animals/index.html', {animals : animals}); },
	  function(error) { console.log(errrrreur); }
	);
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
		res.render('./../views/perdu.html', {animals : lost.animals});
	}
	else {
		if(req.params.type == "trouve") {
		res.render('./../views/trouve.html', {animals : found.animals});
			}
		}
//	});
});

router.get('/new', (req,res)=> {
	const animal = new Animal();
	res.render('./../views/animals/new_lost.html', {types: types});
});

router.get('/:id',function (req,res){
	let promise = new Promise(function(resolve, reject) {
		const animal = Animal.findById(req.params.id);
		setTimeout(() => resolve("done"), 1000);
	});
	
	promise.then(
	  function(result) { res.render('./../views/animals/show.html', {animal : animal});
		console.log(animal); },
	  function(error) { console.log("Erreur"); }
	);
	
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
	
	res.render('./../views/animals/show.html', {animal : animal});
	
	let promise = new Promise(function(resolve, reject) {
		animal.save();
		setTimeout(() => resolve("done"), 1000);
	});
	promise.then(
	  function(result) { console.log(animal);
		res.redirect('/'+animal._id );},
	  function(error) { console.log(errrrreur); }
	);
	
});



module.exports = router;

