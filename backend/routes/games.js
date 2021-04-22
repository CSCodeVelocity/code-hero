const express = require('express');
const gameController = require('../controllers/gameController');

const router = express.Router();

router.post('/', gameController.createGame, (req, res) => {
  res.status(200).json(res.locals);
});

module.exports = router;
