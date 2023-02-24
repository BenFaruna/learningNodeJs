const express = require('express');
const { getPlanets } = require('./planets.controllers');

const planetsRoute = express.Router();

planetsRoute.get('/planets', getPlanets);

module.exports = planetsRoute;
