const express = require('express');
const passport = require('passport');

const router = express.Router();
const AuthController = require('../controllers/auth');

router.get('/github/login', passport.authenticate('github'));
router.get('/github/callback', AuthController.githubAuth);

// TODO: logout을 위한 controller 작성 필요
// router.get('/logout',);

module.exports = router;
