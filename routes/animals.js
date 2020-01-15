const express = require('express');
const router = express.Router();

const Animal = require('./../models/Animal');
const Type = require('./../models/Type');

var animals = [];



router.get('/index',function (req,res){
//	res.render('./../views/animals/index.html', {animals : lost_animals}); 
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
	if (req.params.type == "perdu")	{
		res.render('./../views/perdu.html', {animals : animals});
	}
	else {
		if(req.params.type == "trouve") {
		res.render('./../views/trouve.html', {animals : animals});
			}
		}
});

router.get('/new', (req,res)=> {
	res.render('./../views/animals/new_lost.html');
});

router.get('/perdu/all', (req,res)=> {
	res.render('./../views/all_found.html', {animals : animals});
});

router.get('/perdu/cats', (req,res)=> {
	const cats = [];
	for(let i=0; i<animals.length; i++){
		if(animals[i].race=="Chat"){ cats.push(animals[i]);}
	}
	res.render('./../views/cats_found.html', {animals : cats});
});

router.get('/perdu/dogs', (req,res)=> {
	const dogs = [];
	for(let i=0; i<animals.length; i++){
		if(animals[i].race=="Chien"){ cats.push(animals[i]);}
	}
	res.render('./../views/dogs_found.html', {animals : dogs});
});

router.get('/perdu/others', (req,res)=> {
	const others = [];
	for(let i=0; i<animals.length; i++){
		if(animals[i].race=="Autre"){ cats.push(animals[i]);}
	}
	res.render('./../views/others_found.html', {animals : others});
});



router.get('/:type/:id',function (req,res){
/*	var animal;
	if(req.params.type == "lost"){
		for(var i; i<lost_animals.length; i++){
			if(req.params.id == lost_animals[i].__id){ animal = found_animals[i]; }
		}
	} if(req.params.type="found"){
		for(var i; i<found_animals.length; i++){
			if(req.params.id == found_animals[i].__id){ animal = lost_animals[i]; }
		}
	}
	
	res.render('./../views/animals/show.html', {animal : animal});*/
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
	
	animals.push(animal);
	
	res.redirect('/');
});

module.exports = router;