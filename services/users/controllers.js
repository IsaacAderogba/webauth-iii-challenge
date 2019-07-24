const Users = require('./model');

module.exports = {
  getUsersByFilter: async function(filter) {
    return await Users.findUsersByFilter(filter);
  },
  getUserByFilter: async function(filter) {
    return await Users.findUserByFilter(filter);
  },
  getUserById: async function(id) {
    return await Users.findUserById(id);
  }
}