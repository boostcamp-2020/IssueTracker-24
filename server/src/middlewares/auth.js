const passport = require('passport');

const isAuthenticated = passport.authenticate('jwt', { session: false });

const isNotAuthenticated = (req, res, next) => {
  if (req.headers.authorization) {
    return res.json({ msg: '이미 로그인 된 상태입니다' });
  }

  return next();
};

module.exports = { isAuthenticated, isNotAuthenticated };
