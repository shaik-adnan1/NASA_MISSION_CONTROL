const planets = require("../../models/planets.model.js");

function getAllPlanets(req, res) {
  res.status(200).json({ data: planets });
  console.log("planets");
}

module.exports = {
  getAllPlanets,
};
