const express = require("express");

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/foods", (req, res) => {
  burger.create({ burger_name: req.body.burger_name, devoured: req.body.devoured}, (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});


// Export routes for server.js to use.
module.exports = router;
