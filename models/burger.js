// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");
const burgers = {
  all: (cb) => {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: (newBurgers, cb) => {
    orm.insertOne("burgers", newBurgers, (res) => {
      cb(res);
    });
  },
  update: (burgersData, criteria, cb) => {
    orm.updateOne("burgers", burgersData, criteria, (res) => {
      cb(res);
    });
  },
  // Add a delete method which uses the `orm.deleteOne` method.
  delete: (condition, cb) => {
    orm.deleteOne("burgers", condition, (res) => {
      cb(res);
    });
  },
};
// Export the database functions for the controller (catsController.js).
module.exports = burgers;