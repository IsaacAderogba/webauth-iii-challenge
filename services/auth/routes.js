const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const controller = require("./controllers");
const usersController = require("../users/controllers");
const { validLoginBody, validRegisterBody } = require("./middleware");

router.post("/register", validRegisterBody, async (req, res, next) => {
  const hash = bcrypt.hashSync(req.newUser.password, 12);
  req.newUser.password = hash;

  try {
    const registeredUser = await controller.registerUser(req.newUser);
    if (registeredUser) {
      const token = generateToken(registeredUser);
      res.status(201).json({registeredUser, token});
    } else {
      res.status(400).json({ message: "User could not be created" });
    }
  } catch (err) {
    next(err);
  }
});

router.post("/login", validLoginBody, (req, res, next) => {
  try {
    usersController
      .getUserByFilter({ username: req.user.username })
      .then(user => {
        if (user && bcrypt.compareSync(req.user.password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({
            user,
            token
          });
        } else {
          res
            .status(401)
            .json({ message: "Username and password not authorised" });
        }
      });
  } catch (err) {
    next(err);
  }
});

function generateToken({ id, username, department }) {
  const payload = {
    sub: id,
    username,
    department
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, process.env.JWT_SECRET, options);
}

module.exports = router;
