const animalQueries = require("../db/queries.animals.js");
var multer = require("multer");
var cors = require("cors");
var storage = multer.diskStorage({
  destination: "../../shelter-fe/public/images"
  // filename: function(req, file, cb) {
  //   cb(null, Date.now() + "-" + file.originalname);
  // }
});
var upload = multer({ storage });

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
  show(req, res, next) {
    animalQueries.getAnimal(req.params.id, (err, animal) => {
      if (err || animal == null) {
        alert("That animal does not exist.");
      } else {
        res.json(animal);
      }
    });
  },
  upload(req, res) {
    console.log("made it to the controller.upload");
    upload.single("file"),
      (req, res) => {
        // if (err instanceof multer.MulterError) {
        //   console.log("it was an instanceOf error");
        //   return res.status(500).json(err);
        // } else if (err) {
        //   console.log("it was a general error" + err);
        //   return res.status(500).json(err);
        // }\    res.json(req.file);
        res.json(req.file);
      };
    console.log("upload succeeded");
  },
  create(req, res, next) {
    let newAnimal = {
      species: req.body.species,
      size: req.body.size,
      age: req.body.age,
      breed: req.body.breed,
      gender: req.body.gender,
      name: req.body.name,
      description: req.body.description,
      photo: req.body.photo
    };
    animalQueries.addAnimal(newAnimal, (err, animal) => {
      if (err) {
        console.log(err);
        res.json("That didn't work. Please try again");
      } else {
        res.json("Animal Created!");
      }
    });
  }
};
