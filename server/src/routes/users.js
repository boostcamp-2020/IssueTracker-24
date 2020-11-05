const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();
router.get('/', userController.getAllUser);
router.get('/current', userController.getCurrentUser);
module.exports = router;
