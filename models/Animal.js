const mongoose = require('mongoose');


const animalSchema = new mongoose.Schema({
	race: String,
	color: String,
	city: String,
	sexe: String,
	picture: String,
	type: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Type'
	}
});

const Animal = mongoose.model('Animal', animalSchema);

/*async function createAnimal(animalData) {
	const animal = new Animal({
		animal.race = animalData.race,
		animal.color = animalData.color,
		animal.sexe = animalData.sexe,
		animal.city = animalData.city,
		
		if(req.file) animal.picture = animalData.filename
	})
	const result = await animal.save();
	console.log(result);
};

async function getAnimals(){
	const allAnimals = await Animal.find();
	return allAnimals;
}

async function getAnimalsBy(type){
	const allAnimals = await type.animals;
	return allAnimals;
}*/

module.exports = Animal;
