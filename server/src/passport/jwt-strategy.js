const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const User = require('../models/user');
const config = require('../config');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.jwt.secretKey;

module.exports = () => {
  passport.use(
    new JwtStrategy(opts, (jwtPayload, done) => {
      const findOption = {};
      if (jwtPayload.snsId) {
        // github-login
        findOption.sns_id = jwtPayload.snsId;
        findOption.provider = jwtPayload.provider;
      } else {
        // local-login
        findOption.user_id = jwtPayload.userId;
      }

      User.findOne(findOption, (err, user) => {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      });
    }),
  );
};
