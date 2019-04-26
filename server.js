const app = require("./src/app");
const http = require("http");

const port = normalizePort(process.env.PORT || "5000");
app.set("port", port);

const server = http.createServer(app);

server.listen(port);

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
// //Static file declaration
// app.use(express.static("/shelter-fe/build"));
//
// //production mode
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "shelter-fe/build")));
//   //
//   app.get("*", (req, res) => {
//     res.sendfile(path.join(__dirname, "shelter-fe/build/index.html"));
//   });
// }
//
// //build mode
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "shelter-fe/public/index.html"));
// });
