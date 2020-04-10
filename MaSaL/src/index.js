const express = require("express");
const morgan = require("morgan");
const path = require("path");
const exphbs = require("express-handlebars");

//starts
const app = express();

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
app.use(morgan("dev")); //mostrar peticiones en consola
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//Global variables
app.use((re, res, next) => {
  next();
});

//Routes
app.use(require("./routes/index.js"));
app.use(require("./routes/authentication.js"));
app.use("/vehicles", require("./routes/vehicles.js"));

//Public
app.use(express.static(path.join(__dirname, "public"))); //Para los elementos estáticos.

//Start Server

app.listen(app.get("port"), () => {
  console.log(`Server running on: http://localhost:${app.get("port")}`);
});
