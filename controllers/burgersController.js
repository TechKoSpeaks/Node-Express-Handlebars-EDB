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
  burger.create({ burger_name: req.body.burger_name, devoured: req.body.devoured }, (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});
// using put to replace the value of devoured for a
// specific burgers resource
router.put("/api/burgers/:id/devoured", (req, res) => {
  const condition = { id: req.params.id };
  const update = { devoured: req.body.value };
  burger.update(update, condition, (result) => {
    if (result.affectedRows === 0) {
      // If no rows were affected, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});
// Add a `/api/burgers/:id` delete route which calls the delete method of the burgers
// model to delete the burgers resource with the given id url parameter.
router.delete("/api/burgers/:id", (req, res) => {
  const condition = { id: req.params.id };
  burger.delete(condition, (result) => {
    if (result.affectedRows === 0) {
      // If no rows were affected, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});
// Export routes for server.js to use.
module.exports = router;