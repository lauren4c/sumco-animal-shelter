const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
var cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const appConfig = require("./src/config/main-config.js");
const routeConfig = require("./src/config/route-config.js");

const port = process.env.PORT || "5000";

appConfig.init(app, express);
routeConfig.init(app);

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "public")));

if (process.env.NODE_ENV === "production") {
  // Serve any static files

  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "shelter-fe/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
