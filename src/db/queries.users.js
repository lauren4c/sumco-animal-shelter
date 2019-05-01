const User = require("./models").User;
const bcrypt = require("bcryptjs");

module.exports = {
  createUser(newUser, callback) {
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(newUser.password, salt);

    return User.create({
      email: newUser.email,
      password: hashedPassword,
      name: newUser.name,
      role: 0
    })
      .then(user => {
        callback(null, user);
      })
      .catch(err => {
        console.log(err);
        callback(err);
      });
  }
};
