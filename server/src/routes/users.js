const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();
const { isAuth } = require('../middlewares/auth');

router.get('/', isAuth, userController.getAllUser);
module.exports = router;
