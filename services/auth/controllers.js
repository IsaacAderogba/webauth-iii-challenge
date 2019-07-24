const Auth = require("./model");

module.exports = {
  registerUser: async function(user) {
    return await Auth.insertUser(user);
  }
};
