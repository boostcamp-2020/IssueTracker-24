const express = require('express');
const passport = require('passport');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const passportConfig = require('../passport');
const { sequelize } = require('../models');
const authRouter = require('../routes/auth');

module.exports = (app) => {
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log('✓ DB connection success.');
    })
    .catch((err) => {
      console.error(err);
      process.exit();
    });

  passportConfig();

  app.use(passport.initialize());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use('/auth', authRouter);
};
