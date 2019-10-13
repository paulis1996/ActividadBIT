'use strict';

const express = require('express');
const router = express.Router();
const actores = require('../modelo/actorModelo');

// POST
router.post('/actores', (req, res, next) => {
	actores
		.create(req.body)
		.then((actores) => {
			res.send(actores);
		})
		.catch(next);
});

// PUT
router.put('/actores/:id', (req, res, next) => {
	actores
		.findByIdAndUpdate({ _id: req.params.id }, req.body)
		.then(() => {
			const actor = actores.findOne({ _id: req.params.id });
			return actor;
		})
		.then((actor) => {
			res.send(actor);
		})
		.catch(next);
});

// DELETE
router.delete('/actores/:id', (req, res, next) => {
	actores
		.findByIdAndDelete({ _id: req.params.id })
		.then((actores) => {
			res.send(actores);
		})
		.catch(next);
});

// GET
router.get('/actores/:id', (req, res, next) => {
	actores.findById(req.params.id, (err, actores) => {
		res.status(200).send({ actores });
	});
});
module.exports = router;
