"use strict";
const express = require("express");
const router = express.Router();
const Peliculas = require("../modelo/peliculasModelo");

// AGREGAR POST / CREATE

router.post("/peliculas", (req, res, next) => {
  Peliculas.create(req.body)
    .then(Peliculas => {
      res.send(Peliculas);
    })
    .catch(next);
});

// ACTUALIZAR -> PUT / UPDATE

router.put("/peliculas/:id", (req, res, next) => {
  Peliculas.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      Peliculas.findOne({ _id: req.params.id }).then(Peliculas => {
        res.send(Peliculas);
      });
    })
    .catch(next);
});

// ELIMINAR -> DELETE
router.delete("/peliculas/:id", (req, res, next) => {
  Peliculas.findByIdAndDelete({ _id: req.params.id })
    .then(Peliculas => {
      res.send(Peliculas);
    })
    .catch(next);
});

// CONSULTAR -> GET / READ
router.get("/peliculas/:id", (req, res, next) => {
  Peliculas.findById(req.params.id, (err, Peliculas) => {
    res.status(200).send({ Peliculas });
  });
});
module.exports = router;
