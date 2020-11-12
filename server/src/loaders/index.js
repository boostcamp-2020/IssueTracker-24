const express = require('express');
const passport = require('passport');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const cors = require('cors');
const helmet = require('helmet');
const passportConfig = require('../passport');
const { sequelize } = require('../models');
const indexRouter = require('../routes/index');
const responseCode = require('../utils/response-code');

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
  app.use(cors());
  app.use(helmet());
  app.use('/', indexRouter);

  app.use((req, res, next) => {
    next(createError(responseCode.NOT_FOUND_ERROR));
  });

  app.use((err, req, res, next) => {
    res.status(err.status || responseCode.INTERNAL_SERVER_ERROR);
    res.json({ message: err.message });
  });
};
