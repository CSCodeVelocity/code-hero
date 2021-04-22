const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/:id', userController.getWins, userController.getTotalGames, (req, res) => {
  res.status(200).json(res.locals);
});

router.get('/userdata/:codeBlockId', userController.getTop3Times, (req, res) => {
  res.status(200).json(res.locals.gameData);
});

router.post('/signup', userController.createUser, (req, res) => {
  res.status(200).json(res.locals);
});

router.post('/games', userController.logGame, (req, res) => {
  res.status(200).json(res.locals);
});

router.post('/login', userController.verifyUser, (req, res) => res.status(200).json(res.locals));

module.exports = router;
