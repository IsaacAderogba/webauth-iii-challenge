const router = require('express').Router();

const controller = require("./controllers");
const { userIsAuthed } = require('../auth/middleware');

router.get('/', userIsAuthed, async (req, res, next) => {
  try {
    const { department } = req.decodedToken;
    const users = await controller.getUsersByFilter({department});
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

module.exports = router;