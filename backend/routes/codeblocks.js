const express = require('express');
const codeBlockController = require('../controllers/codeBlockController');

const router = express.Router();

router.get('/', codeBlockController.getRandomCodeBlock, (req, res) => {
  res.status(200).json(res.locals);
});

module.exports = router;
