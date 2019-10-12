"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const peliculasSchema = new Schema({
  Nombre: { type: String },
  Director: { type: String },
  Año: { type: Number },
  Actores: { type: Array },
  Categoria: { type: String, enum: [Suspenso, Terror, Acción, Comedia, Drama] },
  Descripcion: { type: String }
});

const Peliculas = mongoose.model("peliculas", peliculasSchema);
module.exports = Peliculas;
