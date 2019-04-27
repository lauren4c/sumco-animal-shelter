const express = require("express");
const app = express();
const appConfig = require("./config/main-config.js");
const routeConfig = require("./config/route-config.js");

appConfig.init(app, express);
routeConfig.init(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "shelter-fe/build")));
  //
  app.get("*", (req, res) => {
    res.sendfile(path.join(__dirname, "shelter-fe/build/index.html"));
  });
}

module.exports = app;
