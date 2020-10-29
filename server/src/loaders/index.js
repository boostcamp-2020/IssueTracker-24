const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const { sequelize } = require('../models');
const authRouter = require('../routes/auth');

module.exports = (app) => {
  sequelize
    .sync()
    .then(() => {
      console.log('✓ DB connection success.');
    })
    .catch((err) => {
      console.error(err);
      process.exit();
    });

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use('/auth', authRouter);
};
