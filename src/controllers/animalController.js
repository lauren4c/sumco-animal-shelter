const animalQueries = require("../db/queries.animals.js");
var multer = require("multer");
var cors = require("cors");

module.exports = {
  index(req, res, next) {
    animalQueries.getAllAnimals((err, animals) => {
      if (err) {
        console.log(err);
      } else {
        res.json(animals);
      }
    });
  },
  availableAnimals(req, res, next) {
    animalQueries.getAvailableAnimals((err, animals) => {
      if (err) {
        console.log(err);
      } else {
        res.json(animals);
      }
    });
  },
  adoptedAnimals(req, res, next) {
    animalQueries.getAdoptedAnimals((err, animals) => {
      if (err) {
        console.log(err);
      } else {
        res.json(animals);
      }
    });
  },
  pendingAdoptions(req, res, next) {
    animalQueries.getPendingAdoptions((err, animals) => {
      if (err) {
        console.log(err);
      } else {
        res.json(animals);
      }
    });
  },
  show(req, res, next) {
    animalQueries.getAnimal(req.params.id, (err, animal) => {
      if (err || animal == null) {
        res.json("That animal does not exist.");
      } else {
        res.json(animal);
      }
    });
  },
  getType(req, res, next) {
    animalQueries.getAnimalType(
      req.params.column,
      req.params.option,
      (err, animals) => {
        if (err || animals == null) {
          res.json("No Animals available");
        } else {
          res.json(animals);
        }
      }
    );
  },
  upload(req, res, err) {
    console.log(err);
    res.json(req.file);
  },
  create(req, res, next) {
    let newAnimal = {
      type: req.body.type,
      size: req.body.size,
      age: req.body.age,
      breed: req.body.breed,
      gender: req.body.gender,
      status: req.body.status,
      name: req.body.name,
      description: req.body.description,
      photo: req.body.photo
    };
    animalQueries.addAnimal(newAnimal, (err, animal) => {
      if (err) {
        console.log(err);
        res.json({ message: "That didn't work. Please try again" });
      } else {
        res.json({ animal, message: "Animal successfully created!" });
      }
    });
  },
  update(req, res, next) {
    animalQueries.updateAnimal(req, req.body, (err, animal) => {
      if (err || animal == null) {
        res.json({ message: "That animal does not exist." });
      } else {
        res.json({ animal, message: "Animal has been successfully updated" });
      }
    });
  }
};
