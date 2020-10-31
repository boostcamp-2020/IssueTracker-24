const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

const { User } = require('../models');
const { github } = require('../config');

module.exports = () => {
  passport.use(
    new GitHubStrategy(
      {
        clientID: github.clientId,
        clientSecret: github.clientSecret,
        callbackURL: github.callbackURL,
      },
      async (accessToken, refreshToken, { username }, done) => {
        try {
          const exUser = await User.findOne({
            where: { sns_id: username, provider: 'github' },
          });
          if (exUser) {
            done(null, exUser.sns_id);
          } else {
            const newUser = await User.create({
              sns_id: username,
              provider: 'github',
            });
            done(null, newUser.sns_id);
          }
        } catch (err) {
          done(err);
        }
      },
    ),
  );
};
