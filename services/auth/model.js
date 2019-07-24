const db = require("../../data/dbConfig");
const usersController = require("../users/controllers");

module.exports = {
  insertUser: function(user) {
    return db("users")
      .insert(user)
      .then(([id]) =>
        usersController.getUserByIdAndDepartment(id, user.department)
      );
  }
};
