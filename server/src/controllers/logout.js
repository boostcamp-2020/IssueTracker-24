const jwt = require('jsonwebtoken');
const config = require('../config');

const revokeAuth = async (req, res) => {
  const decoded = jwt.verify(req.headers.jwt, config.JWT_SECRET);
  delete req.headers.jwt;

  if (decoded.provider === 'github') {
    //
  }

  return res.redirect('/');
};

module.exports = { revokeAuth };
