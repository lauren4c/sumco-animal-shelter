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
      species: newAnimal.species,
      size: newAnimal.size,
      age: newAnimal.age,
      breed: newAnimal.breed,
      gender: newAnimal.gender,
      name: newAnimal.name,
      description: newAnimal.description,
      photo: newAnimal.photo
    })
      .then(topic => {
        callback(null, topic);
      })
      .catch(err => {
        callback(err);
      });
  }
};
