module.exports = {
  init(app) {
    const animalRoutes = require("../routes/animals");
    const userRoutes = require("../routes/users");

    // if (process.env.NODE_ENV === "test") {
    //   const mockAuth = require("../../spec/support/mock-auth.js");
    //   mockAuth.fakeIt(app);
    // }

    app.use(animalRoutes);
    app.use(userRoutes);
  }
};
