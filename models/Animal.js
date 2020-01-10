const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
	id: Number,	
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

module.exports = Animal;
