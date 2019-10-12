"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const peliculasSchema = new Schema({
  nombre: { type: String },
  director: { type: String },
  ano: { type: Number },
  actores: { type: Array },
  categoria: {
    type: String,
    enum: ["Suspenso", "Terror", "Acción", "Comedia", "Drama"]
  },
  descripcion: { type: String }
});

const Peliculas = mongoose.model("peliculas", peliculasSchema);
module.exports = Peliculas;
