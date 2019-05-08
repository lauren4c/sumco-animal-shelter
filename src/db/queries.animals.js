const Animal = require("./models").Animal;

module.exports = {
  getAllAnimals(callback) {
    return Animal.findAll()
      .then(animals => {
        callback(null, animals);
      })
      .catch(err => {
        callback(err);
      });
  },
  getAvailableAnimals(callback) {
    return Animal.findAll({ where: { status: "Available" } })
      .then(animals => {
        callback(null, animals);
      })
      .catch(err => {
        callback(err);
      });
  },
  getAdoptedAnimals(callback) {
    return Animal.findAll({ where: { status: "Adopted" } })
      .then(animals => {
        callback(null, animals);
      })
      .catch(err => {
        callback(err);
      });
  },
  getPendingAdoptions(callback) {
    return Animal.findAll({ where: { status: "Pending" } })
      .then(animals => {
        callback(null, animals);
      })
      .catch(err => {
        callback(err);
      });
  },
  getAnimalType(column, option, callback) {
    return Animal.findAll({ where: { [column]: option, status: "Available" } })
      .then(animals => {
        callback(null, animals);
      })
      .catch(err => {
        callback(err);
      });
  },
  getAnimal(id, callback) {
    return Animal.findByPk(id)
      .then(animal => {
        callback(null, animal);
      })
      .catch(err => {
        callback(err);
      });
  },
  addAnimal(newAnimal, callback) {
    return Animal.create({
      type: newAnimal.type,
      size: newAnimal.size,
      age: newAnimal.age,
      breed: newAnimal.breed,
      gender: newAnimal.gender,
      status: newAnimal.status,
      name: newAnimal.name,
      description: newAnimal.description,
      photo: newAnimal.photo
    })
      .then(animal => {
        callback(null, animal);
      })
      .catch(err => {
        callback(err);
      });
  },
  updateAnimal(req, updatedAnimal, callback) {
    return Animal.findByPk(req.params.id).then(animal => {
      if (!animal) {
        return callback("Animal not found");
        console.log("Animal not found");
      }
      animal
        .update(updatedAnimal, {
          fields: Object.keys(updatedAnimal)
        })
        .then(() => {
          callback(null, animal);
        })
        .catch(err => {
          callback(err);
        });
    });
  }
};
