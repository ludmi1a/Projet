var router = require('express').Router();
var Type = require('./../models/Type');

const lost = new Type();
lost.name = "Perdu";
const found = new Type();
found.name = "Retrouvé";
const types  = [lost, found];


router.get('/:type', (req, res)=> {
	Type.findOne({name: req.params.type}).populate('animals').then(type => {
		if (req.params.type == "perdu")	{
			res.render('./../views/perdu.html', {
				type : type,
				animals : type.animals
			});
		}
		else {
			if(req.params.type == "trouve") {
				res.render('./../views/trouve.html',{
					type : type,
					animals : type.animals
				});
			}
		}
	});
});

module.exports = router;
