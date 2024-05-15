var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send("Welcome to PokemonDex!");
});

/* Pokemons router */
const pokemonRouter = require("./pokemon.api.js");
router.use("/api/pokemons", pokemonRouter);

module.exports = router;
