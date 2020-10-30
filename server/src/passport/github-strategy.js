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
      async (accessToken, refreshToken, profile, done) => {
        try {
          const exUser = await User.findOne({
            where: { sns_id: profile.id, provider: 'github' },
          });
          if (exUser) {
            done(null, exUser);
          } else {
            const newUser = await User.create({
              sns_id: profile.id,
              provider: profile.provider,
            });
            done(null, newUser);
          }
        } catch (err) {
          done(err);
        }
      },
    ),
  );
};
