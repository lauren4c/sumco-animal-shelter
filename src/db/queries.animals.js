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
  }
};
