const db = require('../models/models.js');

const userController = {};

userController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  const userValues = [
    username,
    password,
  ];

  let success = false;

  const query = 'INSERT INTO public."Users" VALUES (DEFAULT, $1, $2) RETURNING *';

  db.query(query, userValues, (err, result) => {
    if (err) {
      return next({
        log: err.message,
        message: { err: 'failed to add user to database' },
      });
    }
    console.log('result', result.rows[0]);
    if (result.rows.length === 0) {
      res.locals.success = false;
      return next();
    }
    success = true;
    res.locals.userId = result.rows[0].id;
    res.locals.username = result.rows[0].username;
    res.locals.success = success;
    return next();
  });
};

userController.logGame = (req, res, next) => {
  const { gameId, userId, time } = req.body;
  const gameValues = [
    gameId,
    userId,
    time,
  ];

  const query = 'INSERT INTO public."Users_Games" VALUES (DEFAULT, $1, $2, $3) RETURNING *';

  db.query(query, gameValues, (err, result) => {
    if (err) {
      return next({
        log: 'userController.logGame failed',
        message: { err: 'failed to log game data' },
      });
    }
    console.log('result.rows', result.rows);
    res.locals.id = result.rows[0].id;
    return next();
  });
};

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
    let wins = result.rows.length;
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
    let totalGames = result.rows.length;
    console.log('totalGames: ', totalGames);
    if (totalGames === undefined) totalGames = 0;
    res.locals.losses = totalGames - res.locals.wins;
    return next();
  });
};

userController.getTop3Times = (req, res, next) => {
  const idParam = [
    req.params.codeBlockId,
  ];
  const query = `
    SELECT time, user_id FROM public."Users_Games" WHERE game_id IN 
    (SELECT id FROM public."Games" WHERE code_block_id = $1)
    ORDER BY time LIMIT 3
    `;

  // `
  // SELECT public."Users".username, public."Users_Games".time FROM public."Users" LEFT JOIN public."Users_Games" WHERE public."Users".id IN
  // (SELECT time, user_id FROM public."Users_Games" WHERE game_id IN
  // (SELECT id FROM public."Games" WHERE code_block_id = $1))
  // ORDER BY time LIMIT 3
  // `

  db.query(query, idParam, (err, result) => {
    if (err) {
      return next({
        log: 'error in userController.getTop3Times',
        message: { err: 'failed to find top 3 times' },
      });
    }
    // console.log('result rows from query', result.rows);
    // res.locals.times = [];
    // res.locals.ids = [];
    // result.rows.forEach((user) => res.locals.times.push(user.time));
    // result.rows.forEach((user) => res.locals.ids.push(user.user_id));
    // console.log(res.locals.times);
    console.log('result rows from first query', result.rows)
    res.locals.gameData = result.rows;
    return next();
  });
};

userController.getTop3Users = (req, res, next) => {
  // console.log('query ids', res.locals.times);
  const values = [];
  res.locals.gameData.forEach((obj) => values.push(obj.user_id));
  console.log('values', values);
  const query = `
  SELECT username FROM public."Users" WHERE id IN ($1, $2, $3)
 `;

  db.query(query, values, (err, result) => {
    if (err) {
      return next({
        log: `error in userController.getTop3Users, error: ${err.message}`,
        message: { err: 'failed to find top 3 times' },
      });
    }
    console.log('result rows from query', result.rows);

    // counter corresponding to length of result.rows since there
    // could be multiple high scores per user
    let counter = 0;

    res.locals.gameData.forEach((obj, index) => {
      if (index !== 0 && obj.user_id !== res.locals.gameData[index - 1].user_id) {
        counter ++;
      }
      obj.username = result.rows[counter].username;
    });

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
