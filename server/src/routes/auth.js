const express = require('express');
const passport = require('passport');

const router = express.Router();
const AuthController = require('../controllers/auth');
const { isAuthenticated, isNotAuthenticated } = require('../middlewares/auth');

/* 로그인 되지 않은 상태에서만 login 시도 가능 */
router.get('/github/login', isNotAuthenticated, passport.authenticate('github'));

router.get('/github/callback', AuthController.githubAuth);

/* 로그인 된 상태에서만 logout 시도 가능 */
router.get('/logout', isAuthenticated, AuthController.logout);

module.exports = router;
