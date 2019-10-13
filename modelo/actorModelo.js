'use strict';

const moongose = require('mongoose');
const Schema = moongose.Schema;

const actorSchema = new Schema({
	nombre: { type: String },
	edad: { type: Number },
	pais: { type: String },
	tipo: { type: String },
	actuaciones: { type: Array },
	salario: { type: Number }
});

const actores = moongose.model('actores', actorSchema);

module.exports = actores;
