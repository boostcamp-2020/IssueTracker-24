const express = require('express');

const router = express.Router();
const authController = require('../controllers/auth-controller');

router.get('/github/login', authController.githubLogin);

module.exports = router;
