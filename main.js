"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const route = require("./rutas/peliculasRutas");
const routeActor = require("./rutas/actorRutas");
const colors = require("colors");
const app = express();
const PORT = 8080;
const DB = "CineBit";

mongoose
  .connect("mongodb://localhost:27017", {
    dbName: DB,
    useNewUrlParser: true
  })
  .then(() => {
    console.log(`Pudimos ingresar a la base de datos ${DB}`.bgBlue);
  })
  .catch(error => {
    console.log(
      `tenemos problemas para entrar a la base de datos:${error}`.bgRed
    );
  });

app.use(bodyParser.json());
app.use("/api", route);
app.use("/api", routeActor);
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});
app.listen(PORT, () => {
  console.log(`Estamos usando el Puerto ${PORT}`.bgMagenta);
});
