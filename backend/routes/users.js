const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/:id', userController.getWins, userController.getTotalGames, (req, res) => {
  console.log('hit router');
  res.status(200).json(res.locals);
});

module.exports = router;
