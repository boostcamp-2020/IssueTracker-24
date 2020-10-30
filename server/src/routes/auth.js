const express = require('express');
const passport = require('passport');

const router = express.Router();
const { githubAuth } = require('../controllers/github');
const { revokeAuth } = require('../controllers/logout');

router.get('/github/login', passport.authenticate('github'));
router.get('/github/callback', githubAuth);

router.get('/logout', revokeAuth);

module.exports = router;
