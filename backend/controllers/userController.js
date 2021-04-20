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

module.exports = userController;
