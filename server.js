// Creating all requirements and constants for application //
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgersController.js");

const PORT = process.env.PORT || 8080;

const app = express();

// Creating the static content for the app from the "public" directory into the application directory. //
app.use(express.static("public"));

// Parsing into json data //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting the handlebars as view engine //
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);
// Using routes and then starting server to listen on port defined and log result when listening //
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${ PORT}`);
});
