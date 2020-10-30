const jwt = require('jsonwebtoken');
const passport = require('passport');

const githubAuth = async (req, res, next) => {
  passport.authenticate('github', { session: false }, (err, snsId) => {
    if (err || !snsId) {
      return res.redirect('/auth');
    }
    const payload = { snsId, provider: 'github' };
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    return res.json({ jwt: token });
  })(req, res, next);
};

module.exports = { githubAuth };
