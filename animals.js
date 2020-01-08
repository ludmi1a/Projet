var mongoose = require('mongoose');

var animalSchema = new mangoose.Schema({
    race: String,
    color: String,
    city: String,
    sexe: String,
    image: String
});

var animal = mangoose.model('Animal', animalSchema);

module.exports = Animal;