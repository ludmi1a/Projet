const mongoose = require('mongoose');


const animalSchema = new mongoose.Schema({
	race: String,
	color: String,
	city: String,
	sexe: String,
	picture: String,
	type: String,
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
