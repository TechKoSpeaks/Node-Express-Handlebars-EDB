const express = require("express");

// Import the model (cat.js) to use its database functions.
const cat = require("../models/cat.js");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  cat.all((data) => {
    const hbsObject = {
      cats: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/cats", (req, res) => {
  cat.create({ name: req.body.name, sleepy: req.body.sleepy }, (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// using put to replace the value of sleepy for a
// specific cat resource
router.put("/api/cats/:id/sleepy", (req, res) => {
  const condition = { id: req.params.id };
  const update = { sleepy: req.body.value };

  cat.update(update, condition, (result) => {
    if (result.affectedRows === 0) {
      // If no rows were affected, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

// Add a `/api/cats/:id` delete route which calls the delete method of the cat
// model to delete the cat resource with the given id url parameter.
// ... CODE HERE ...
router.put("/api/cats/:id/delete", (req, res) => {
  const condition = { id: req.params.id };
  const update = { sleepy: req.body.value };

  cat.update(update, condition, (result) => {
    if (result.affectedRows === 0) {
      // If no rows were affected, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

// Export routes for server.js to use.
module.exports = router;
