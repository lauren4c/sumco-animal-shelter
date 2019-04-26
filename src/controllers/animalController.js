const animalQueries = require("../db/queries.animals.js");

module.exports = {
  index(req, res, next) {
    animalQueries.getAllAnimals((err, animals) => {
      if (err) {
        console.log(err);
      } else {
        res.json(animals);
      }
    });
  }
};
