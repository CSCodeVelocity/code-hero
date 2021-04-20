const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/:id', userController.getUser, (req, res) => {
  console.log('hit router');
  res.status(200).json(res.locals.user);
});

module.exports = router;
