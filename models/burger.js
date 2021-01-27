// Importing the ORM to create functions that will interact with the database. //
const orm = require("../config/orm.js");
const burgers = {
  all: (cb) => {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },

  // Function for creating burgers //
  create: (newBurgers, cb) => {
    orm.insertOne("burgers", newBurgers, (res) => {
      cb(res);
    });
  },
  // Function for updating burgers data //
  update: (burgersData, criteria, cb) => {
    orm.updateOne("burgers", burgersData, criteria, (res) => {
      cb(res);
    });
  },

  // ORM function for deleting burgers data //
  delete: (condition, cb) => {
    orm.deleteOne("burgers", condition, (res) => {
      cb(res);
    });
  },
};

// Using module.exports to export data to burgerController.js //
module.exports = burgers;