const express = require('express');
const passport = require('passport');

const router = express.Router();
const AuthController = require('../controllers/auth');
const { isAuth } = require('../middlewares/auth');

router.get('/github/login', passport.authenticate('github'));

router.get('/github/callback', AuthController.githubAuth);

router.get('/logout', isAuth, AuthController.logout);

module.exports = router;
