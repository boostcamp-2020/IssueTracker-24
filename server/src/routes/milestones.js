const express = require('express');
const milestoneController = require('../controllers/milestone');

const router = express.Router();

const { isAuth } = require('../middlewares/auth');

router.get('/', isAuth, milestoneController.getAllMilestone);
module.exports = router;
