const { planets } = require('../models/planets.models');

function getPlanets(req, res) {
  res.status(200).json(planets);
}

module.exports = {
  getPlanets,
}
