const express = require('express');
const authRouter = require('./auth');
const issuesRouter = require('./issues');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/issues', issuesRouter);

module.exports = router;
