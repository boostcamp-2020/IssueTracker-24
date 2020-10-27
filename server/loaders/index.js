const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

module.exports = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(morgan('dev'));
  app.use(cookieParser());
};
