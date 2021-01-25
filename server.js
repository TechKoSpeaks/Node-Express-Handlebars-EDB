// Requiring all the needed express, handlebars and routes for server //
const express = require("express");
const exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

// Setting up port 8080 listener //
const PORT = process.env.PORT || 8080;
// Creating the constant for the app //
const app = express();

// Serves the static files to be arrayed correctly into the directory //
app.use(express.static(__dirname + "/public"));

// Takes the application body and parses it/ encodes into json data //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting up the view engine for handlebars to be utilized on the main layout //
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Using the correct routes needed for burgers_controller //
app.use(routes);

// Setting up the listen function on localhost //
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});