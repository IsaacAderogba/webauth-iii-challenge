const router = require('express').Router();
const controller = require('./controllers');

router.post("/register", async (req, res, next) => {
  try {
    const registeredUser = await controller.registerUser(req.body);
    res.status(201).json(registeredUser)
  } catch (err) {
    next(err);
  }
})

module.exports = router;