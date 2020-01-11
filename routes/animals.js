const express = require('express');
const router = express.Router();

const Animal = require('./../models/Animal');
const Type = require('./../models/Type');

const perdu = new Type();
perdu.name = "Perdu";
const retrouve = new Type();
retrouve.name = "Retrouvé";
const types  = [perdu, retrouve];

/*async function getAnimals() {
  const Animals = await Animal.find();
  console.log(Animals);
}*/


router.get('/',function (req,res){
	console.log('hello');
	const animals = Animal.find({});
	console.log(animals);
	res.render('./../views/animals/index.html', {animals : animals});
	
});



router.get('/', (req,res)=>{
	res.render('./../views/accueil.html');
});

router.get('/infos', (req,res)=>{
	res.render('./../views/infos.html');
});

router.get('/type/:type', (req,res)=>{
	console.log('hello');
//	Type.findOne({name: req.params.type}).populate('animals').then(type => {
		if (req.params.type == "perdu")	{
			res.render('./../views/perdu.html');
		}
		else {
			if(req.params.type == "trouve") {
				res.render('./../views/trouve.html');
			}
		}
//	});
});

router.get('/new', (req,res)=> {
	const animal = new Animal();
	res.render('./../views/animals/new_lost.html', {types: types});
});

router.get('/:id',function (req,res){
	Animal.findById(req.params.id).populate('type').then(animal => {
		res.render('animals/show.html', {animal : animal});	
	});
});

router.post('/new', (req, res)=> {
	console.log('le post');
		animal = new Animal();
		animal.race = req.body.race;
		animal.color = req.body.color;
		animal.sexe = req.body.sexe;
		animal.city = req.body.city;
		
		if(req.file) animal.picture = req.file.filename;
		console.log(req.body);
		res.redirect('/');
});



module.exports = router;

