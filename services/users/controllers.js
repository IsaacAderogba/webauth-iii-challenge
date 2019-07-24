const Users = require('./model');

module.exports = {
  getUsersByDepartment: async function(department) {
    return await Users.findUsersByDepartment(department);
  },
  getUserByIdAndDepartment: async function(id, department) {
    return await Users.findUserByIdAndDepartment(id, department);
  }
}