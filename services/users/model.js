const db = require("../../data/dbConfig");

module.exports = {
  findUsersByDepartment: function(department) {
    return db("users").where({ department });
  },
  findUserByIdAndDepartment: function(id, department) {
    return db("users")
      .where({id, department})
      .first();
  }
};
