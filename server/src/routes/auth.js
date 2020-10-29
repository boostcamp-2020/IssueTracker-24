const express = require('express');
const passport = require('passport');

const router = express.Router();
const { githubAuth } = require('../controllers/github');

router.get('/github/login', passport.authenticate('github'));
router.get('/github/callback', githubAuth);

module.exports = router;
