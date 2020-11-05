const express = require('express');
const userController = require('../controllers/user');
const { isAuth } = require('../middlewares/auth');
const router = express.Router();

router.get('/current', userController.getCurrentUser);
router.get('/', isAuth, userController.getAllUser);

module.exports = router;
