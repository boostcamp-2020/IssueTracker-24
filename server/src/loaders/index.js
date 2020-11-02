const express = require('express');
const passport = require('passport');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
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

  app.use((req, res, next) => {
    next(createError(404));
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message);
  });
};
