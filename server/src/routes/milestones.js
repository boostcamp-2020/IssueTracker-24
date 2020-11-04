const express = require('express');
const milestoneController = require('../controllers/milestone');

const router = express.Router();
router.get('/', milestoneController.getAllMilestone);
module.exports = router;
