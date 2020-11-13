const passport = require('passport');
const responseCode = require('../utils/response-code');

const isAuth = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) return next(err);

    if (info) {
      const error = new Error(info.message);
      error.status = responseCode.UNAUTHORIZED; // 401 Unauthorized
      return next(error);
    }

    if (!user) {
      const error = new Error('Authentication failed');
      error.status = responseCode.UNAUTHORIZED;
      return next(error);
    }

    req.user = user;
    return next();
  })(req, res, next);
};

module.exports = { isAuth };
