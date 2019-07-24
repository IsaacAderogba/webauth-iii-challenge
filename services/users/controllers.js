const Users = require('./model');

module.exports = {
  getUsersByDepartment: async function(department) {
    return await Users.findUsersByDepartment(department);
  },
  getUserByFilterAndDepartment: async function(filter, department) {
    return await Users.findUserByFilterAndDepartment(filter, department);
  }
}