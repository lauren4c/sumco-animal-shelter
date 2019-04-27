require("dotenv").config();
const logger = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
// const expressValidator = require("express-validator");
const session = require("express-session");
// const passportConfig = require("./passport-config");

module.exports = {
  init(app, express) {
    app.use(logger("dev"));
    app.use(bodyParser.urlencoded({ extended: true }));

    //production mode
    if (process.env.NODE_ENV === "production") {
      app.use(express.static(path.join(__dirname, "shelter-fe/build")));
      //
      app.get("*", (req, res) => {
        res.sendfile(path.join(__dirname, "shelter-fe/build/index.html"));
      });
    }

    app.use(bodyParser.json());

    // app.use(expressValidator());
    // app.use(
    //   session({
    //     secret: process.env.cookieSecret,
    //     resave: false,
    //     saveUninitialized: false,
    //     cookie: { maxAge: 1.21e9 } //set cookie to expire in 14 days
    //   })
    // );
    // passportConfig.init(app);
    //
    // app.use((req, res, next) => {
    //   res.locals.currentUser = req.user;
    //   next();
    // });
  }
};
