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
      async (accessToken, refreshToken, { username, photos }, done) => {
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
              profile_image: photos[0].value,
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
