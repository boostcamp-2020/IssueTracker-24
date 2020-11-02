const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const { User } = require('../models');
const config = require('../config');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.jwt.secretKey;

module.exports = () => {
  passport.use(
    new JwtStrategy(opts, (jwtPayload, done) => {
      const findOption = {};
      if (jwtPayload.sns_id) {
        // github-login
        findOption.sns_id = jwtPayload.sns_id;
        findOption.provider = jwtPayload.provider;
      } else {
        // local-login
        findOption.user_id = jwtPayload.user_id;
      }

      return User.findOne({ where: findOption })
        .then((user) => done(null, user))
        .catch((err) => done(err));
    }),
  );
};
