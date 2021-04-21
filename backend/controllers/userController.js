const db = require('../models/models.js');

const userController = {};

userController.getWins = (req, res, next) => {
  const idParam = [
    req.params.id,
  ];
  const query = 'SELECT * FROM public."Games" WHERE winner_id = $1';

  db.query(query, idParam, (err, result) => {
    if (err) {
      return next({
        log: 'userController.getWins failed',
        message: { err: 'failed to find users wins' },
      });
    }
    let wins = result.rows[0];
    console.log('wins: ', wins);
    if (wins === undefined) wins = 0;
    res.locals.wins = wins;
    return next();
  });
};

userController.getTotalGames = (req, res, next) => {
  const idParam = [
    req.params.id,
  ];
  const query = 'SELECT * FROM public."Users_Games" WHERE user_id = $1';

  db.query(query, idParam, (err, result) => {
    if (err) {
      return next({
        log: 'userController.getTotalGames failed',
        message: { err: 'failed to find users total games' },
      });
    }
    let totalGames = result.rows[0];
    console.log('totalGames: ', totalGames);
    if (totalGames === undefined) totalGames = 0;
    res.locals.totalGames = totalGames;
    return next();
  });
};

// this function verifies that the user exists in the database and sends back their id, username,
// and success boolean
userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  const userValues = [
    username,
    password,
  ];
  console.log('userValues', userValues);

  const query = 'SELECT * FROM public."Users" WHERE username = $1 AND password = $2';

  db.query(query, userValues, (err, result) => {
    // default username and id to empty strings in case of failed login attempt
    res.locals.userId = '';
    res.locals.username = '';
    if (err) {
      res.locals.success = false;
      return next();
    }
    console.log('result', result.rows[0]);
    if (result.rows.length === 0) {
      res.locals.success = false;
      return next();
    }
    res.locals.success = true;
    res.locals.userId = result.rows[0].id;
    res.locals.username = result.rows[0].username;
    return next();
  });
};

module.exports = userController;
