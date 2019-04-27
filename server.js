const app = require("./src/app");
const http = require("http");
const express = require("express");
const appExpress = express();
const path = require("path");
const bodyParser = require("body-parser");

const port = normalizePort(process.env.PORT || "5000");
appExpress.use(bodyParser.urlencoded({ extended: true }));

app.set("port", port);

const server = http.createServer(app);

server.listen(port);
appExpress.use(express.static(__dirname));

if (process.env.NODE_ENV === "production") {
  appExpress.use(express.static(path.join(__dirname, "shelter-fe/build")));
  //
  appExpress.get("*", (req, res) => {
    res.sendfile(path.join(__dirname, "shelter-fe/build/index.html"));
  });
}

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

server.on("listening", () => {
  console.log(
    `server is listening for requests on port ${server.address().port}`
  );
});
