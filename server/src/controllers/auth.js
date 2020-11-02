const jwt = require('jsonwebtoken');
const passport = require('passport');

const githubAuth = async (req, res, next) => {
  passport.authenticate('github', { session: false }, (err, sns_id) => {
    if (err || !sns_id) {
      return res.json({ msg: 'GitHub 로그인 오류 발생' });
    }
    const payload = { sns_id, provider: 'github' };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    res.cookie('jwt', token);
    return res.redirect('http://localhost:8200');
  })(req, res, next);
};

const logout = (req, res, next) => res.status(200).json({ msg: '로그아웃 성공' });

module.exports = { githubAuth, logout };
