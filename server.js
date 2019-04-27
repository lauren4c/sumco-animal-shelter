const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const appConfig = require("./src/config/main-config.js");
const routeConfig = require("./src/config/route-config.js");

const port = process.env.PORT || "5000";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "shelter-fe/build")));
  //
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "shelter-fe/build", "index.html"));
  });
}

appConfig.init(app, express);
routeConfig.init(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
