const express = require('express');
const router = express.Router();

const Animal = require('./../models/Animal');
const Type = require('./../models/Type');

var animals = [];



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

router.get('/trouve/all', (req,res)=> {
	const all = [];
	for(let i=0; i<animals.length; i++){
		if(animals[i].type == "Perdu"){ all.push(animals[i]);}
	}
	res.render('./../views/all_lost.html', {animals : all});
});

router.get('/trouve/cats', (req,res)=> {
	const cats = [];
	for(let i=0; i<animals.length; i++){
		if(animals[i].race=="Chat" && animals[i].type == "Perdu"){ cats.push(animals[i]);}
	}
	res.render('./../views/cats_lost.html', {animals : cats});
});

router.get('/trouve/dogs', (req,res)=> {
	const dogs = [];
	for(let i=0; i<animals.length; i++){
		if(animals[i].race=="Chien" && animals[i].type == "Perdu"){ dogs.push(animals[i]);}
	}
	res.render('./../views/dogs_lost.html', {animals : dogs});
});

router.get('/trouve/others', (req,res)=> {
	const others = [];
	for(let i=0; i<animals.length; i++){
		if(animals[i].race=="Autre" && animals[i].type == "Perdu"){ others.push(animals[i]);}
	}
	res.render('./../views/others_lost.html', {animals : others});
});

router.get('/perdu/all', (req,res)=> {
	const all = [];
	for(let i=0; i<animals.length; i++){
		if(animals[i].type == "Trouvé"){ all.push(animals[i]);}
	}
	res.render('./../views/all_found.html', {animals : all});
});

router.get('/perdu/cats', (req,res)=> {
	const cats = [];
	for(let i=0; i<animals.length; i++){
		if(animals[i].race=="Chat" && animals[i].type == "Trouvé"){ cats.push(animals[i]);}
	}
	res.render('./../views/cats_found.html', {animals : cats});
});

router.get('/perdu/dogs', (req,res)=> {
	const dogs = [];
	for(let i=0; i<animals.length; i++){
		if(animals[i].race=="Chien" && animals[i].type == "Trouvé"){ dogs.push(animals[i]);}
	}
	res.render('./../views/dogs_found.html', {animals : dogs});
});

router.get('/perdu/others', (req,res)=> {
	const others = [];
	for(let i=0; i<animals.length; i++){
		if(animals[i].race=="Autre" && animals[i].type == "Trouvé"){ others.push(animals[i]);}
	}
	res.render('./../views/others_found.html', {animals : others});
});

router.get('/contact',function (req,res){
	res.render('./../views/contact.html');
});


router.get('/:id',function (req,res){
for(let i=0; i<animals.length;i++){
	if(req.params.id==animals[i]._id){
		res.render('./../views/animals/show.html', {animal : animals[i]});
	}
}
});

router.post('/new', (req, res)=> {

	const animal = new Animal();
	animal.race = req.body.race;
	animal.color = req.body.color;
	animal.sexe = req.body.sexe;
	animal.city = req.body.city;
	animal.type = req.body.type;
	if(req.file) animal.picture = req.file.filename ;
	
	animals.push(animal);
	console.log("Ajout de "+animal+" a la liste")
	res.redirect('/');
});

  

module.exports = router;
