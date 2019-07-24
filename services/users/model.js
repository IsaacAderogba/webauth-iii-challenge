const db = require("../../data/dbConfig");

module.exports = {
  findUsersByDepartment: function(department) {
    return db("users").where({ department });
  },
  findUserByFilterAndDepartment: function(filter, department) {
    return db("users")
      .where({ filter, department })
      .first();
  }
};