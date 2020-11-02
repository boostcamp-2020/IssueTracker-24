const passport = require('passport');

const isAuth = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) return next(err);

    if (info) {
      const error = new Error(info.message);
      error.status = 401; // 401 Unauthorized
      return next(error);
    }

    if (!user) {
      const error = new Error('Authentication failed');
      error.status = 401;
      return next(error);
    }

    req.user = user;
    return next();
  })(req, res, next);
};

module.exports = { isAuth };
