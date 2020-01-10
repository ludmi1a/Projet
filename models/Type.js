const mongoose = require('mongoose');

const typeSchema = new mongoose.Schema({
	name: String,
});

typeSchema.virtual('animals', {
	ref: 'Animal',
	localField: '_id',
	foreignField: 'type'
});	

const Type = mongoose.model('Type', typeSchema);

module.exports = Type;
