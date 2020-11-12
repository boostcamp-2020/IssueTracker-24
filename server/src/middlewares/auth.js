const passport = require('passport');
const errorCode = require('../utils/error-code');

const isAuth = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) return next(err);

    if (info) {
      const error = new Error(info.message);
      error.status = errorCode.UNAUTHORIZED; // 401 Unauthorized
      return next(error);
    }

    if (!user) {
      const error = new Error('Authentication failed');
      error.status = errorCode.UNAUTHORIZED;
      return next(error);
    }

    req.user = user;
    return next();
  })(req, res, next);
};

module.exports = { isAuth };
