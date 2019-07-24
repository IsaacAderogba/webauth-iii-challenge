module.exports = {
  validRegisterBody: function(req, res, next) {
    let { username, password, department } = req.body;

    if (!username || !password || !department) {
      return res
        .status(400)
        .json({ message: "Missing required fields username, password or department" });
    }
    req.newUser = req.body;
    next();
  },
  validLoginBody: function(req, res, next) {
    let { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Missing required fields username or password" });
    }
    req.user = req.body;
    next();
  }
}