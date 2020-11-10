const express = require('express');
const milestoneController = require('../controllers/milestone');

const router = express.Router();

const { isAuth } = require('../middlewares/auth');

router.get('/', isAuth, milestoneController.getAllMilestone);
router.post('/', isAuth, milestoneController.createMilestone);
router.get('/:id', isAuth, milestoneController.getMilestone);
router.put('/:id', isAuth, milestoneController.updateMilestone);
router.patch('/:id', isAuth, milestoneController.patchMilestone);

module.exports = router;
