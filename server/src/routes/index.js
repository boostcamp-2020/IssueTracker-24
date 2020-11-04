const express = require('express');
const authRouter = require('./auth');
const issuesRouter = require('./issues');
const labelRouter = require('./labels');
const milestonesRouter = require('./milestones');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/issues', issuesRouter);
router.use('/labels', labelRouter);
router.use('/milestones', milestonesRouter);

module.exports = router;
