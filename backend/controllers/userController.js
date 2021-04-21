const db = require('../models/models.js');

const userController = {};

userController.getUser = (req, res, next) => {
  const idParam = [
    req.params.id,
  ];
  const query = 'SELECT * FROM public."Users" WHERE id = $1';

  db.query(query, idParam, (err, result) => {
    if (err) {
      return next({
        log: 'userController.getUser failed',
        message: { err: 'failed to find user' },
      });
    }
    const userData = result.rows[0];
    console.log(userData);
    if (userData === undefined) return next({ log: 'no user at this id' });
    res.locals.user = userData;
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
