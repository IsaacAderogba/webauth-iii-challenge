const db = require("../../data/dbConfig");

module.exports = {
  findUserById: function(id) {
    return db("users")
      .where({ id })
      .first();
  },
  findUserByFilter(filter) {
    return db("users")
      .where(filter)
      .first();
  },
  findUsersByFilter: function(filter) {
    return db("users").where(filter);
  }
};
