const jwt = require('jsonwebtoken');
const passport = require('passport');
const responseCode = require('../utils/response-code');

const githubAuth = async (req, res, next) => {
  passport.authenticate('github', { session: false }, (err, sns_id) => {
    if (err || !sns_id) {
      return res.json({ msg: 'GitHub 로그인 오류 발생' });
    }
    const payload = { sns_id, provider: 'github' };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    res.cookie('jwt', token);
    return res.redirect(`http://${process.env.HOST}:${process.env.FRONT_PORT}`);
  })(req, res, next);
};

const logout = (req, res, next) => res.status(responseCode.RESPONSE_OK).json({ msg: '로그아웃 성공' });

module.exports = { githubAuth, logout };
