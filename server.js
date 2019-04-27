const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const appConfig = require("./src/config/main-config.js");
const routeConfig = require("./src/config/route-config.js");

const port = process.env.PORT || "5000";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

appConfig.init(app, express);
routeConfig.init(app);

// app.use(express.static(__dirname));

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "shelter-fe/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "shelter-fe/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
