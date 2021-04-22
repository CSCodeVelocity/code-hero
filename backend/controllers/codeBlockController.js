const db = require('../models/models.js');

const codeBlockController = {};

codeBlockController.getRandomCodeBlock = (req, res, next) => {
  const query = 'SELECT * FROM public."CodeBlocks"';

  db.query(query)
    .then((response) => {
      const blockTotal = response.rows.length;
      const randomNum = Math.floor(Math.random() * blockTotal);
      const randomCodeBlock = response.rows[randomNum];
      res.locals.id = randomCodeBlock.id;
      res.locals.text = randomCodeBlock.text;
      return next();
    }).catch((err) => next({
      log: 'codBlockController get random codeBlock failed',
      message: { err: 'getting random codeBlock from database failed' },
    }));
};

module.exports = codeBlockController;
