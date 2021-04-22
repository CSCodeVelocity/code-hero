const db = require('../models/models.js');

const gameController = {};

gameController.createGame = (req, res, next) => {
  const { winnerId, codeBlockId } = req.body;
  const gameValues = [
    codeBlockId,
    winnerId,
  ];

  const query = 'INSERT INTO public."Games" VALUES (DEFAULT, $1, $2) RETURNING *';

  db.query(query, gameValues, (err, result) => {
    if (err) {
      return next({
        log: 'gameController.createGame failed',
        message: { err: 'failed to add game to database' },
      });
    }
    res.locals.id = result.rows[0].id;
    return next();
  });
};

module.exports = gameController;
