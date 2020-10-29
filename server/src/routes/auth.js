const express = require('express');

const router = express.Router();

router.post('login', (req, res, next) => {
  console.log('login');
  res.end();
});

module.exports = router;
