const express = require("express");
const morgan = require("morgan");
const path = require("path");
const exphbs = require("express-handlebars");
const flash = require("connect-flash");
const session = require("express-session");
const mysqlStore = require("express-mysql-session");
const { database } = require("./keys");
const passport = require("passport");

//Iinitial
const app = express();
require("./lib/passport.js");

//Settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require("./lib/handlebars.js")
  })
);

app.set("view engine", ".hbs");
//middlewares
app.use(
  session({
    secret: "Session",
    resave: false,
    saveUninitialized: false,
    store: new mysqlStore(database)
  })
);
app.use(flash());
app.use(morgan("dev")); //mostrar peticiones en consola
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
//Global variables
app.use((req, res, next) => {
  app.locals.success = req.flash("success");
  app.locals.message = req.flash("message");
  app.locals.user = req.user;
  next();
});

//Routes
app.use(require("./routes/index.js"));
app.use(require("./routes/authentication.js"));
app.use("/vehicles", require("./routes/vehicles.js"));
app.use(require("./routes/map.js"));

//Public
app.use(express.static(path.join(__dirname, "public"))); //Para los elementos estáticos.

//Start Server

app.listen(app.get("port"), () => {
  console.log(`Server running on: http://localhost:${app.get("port")}`);
});
