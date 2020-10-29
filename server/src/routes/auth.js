const express = require('express');

const router = express.Router();
const authController = require('../controllers/auth-controller');

router.post('/github/login', authController.githubLogin);

module.exports = router;
